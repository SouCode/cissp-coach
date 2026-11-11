"""Record every app line as an MP3 clip with the Kokoro voice engine.

Usage:
  node tools/lines.mjs > /tmp/lines.json
  python tools/record.py /tmp/lines.json --models ~/kokoro-models
  python tools/record.py /tmp/lines.json --models ~/kokoro-models --check "ISO 27001" "The answer is A."

Writes audio/<pack>.json = {"v":1, "voices":{"t":..,"q":..}, "clips":{key: base64 mp3}}.
Clips already recorded with the same voices are kept, so re-runs only record new lines.
Needs: pip install kokoro-onnx soundfile ; ffmpeg with libmp3lame on PATH.
"""
import argparse, base64, json, os, re, subprocess, sys, time
import numpy as np

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOICES = {"t": ("af_heart", "en-us"), "q": ("bf_emma", "en-gb")}
RATE = 24000
TAIL_SEC = 0.28          # silence after each clip, the pause between lines

# ---- pronunciation guide (changes only what is spoken, never the on-screen text) ----
LETTERS = {"A": "Eigh", "B": "bee", "C": "see", "D": "dee"}   # "Eigh" is how the engine says the letter A
SPELL = """ALE ARO AUP BCP BIA BOM CIA CIS CSF DRP DSS EAR EU GDPR HR ID IEC IP ISMS ISO IT MTD NDA PCI PIPL
RMF RPO RTO SCRM SDLC SLA SLE TLS US WRT""".split()
WORDS = {"ISC2": "I S C squared", "ISC²": "I S C squared", "CISSP": "C I S S P", "NIST": "nist",
         "STRIDE": "stride", "DREAD": "dread", "VAST": "vast", "PASTA": "pasta", "DAD": "dad",
         "COBIT": "co bit", "SABSA": "sab sa", "POPIA": "po pee uh", "ISACA": "eye sacka", "ITAR": "eye tar",
         "SBOM": "ess bom", "SOC": "sock", "PUF": "puff", "II": "two", "Log4j": "Log four J"}
EMPHASIS = "BEST MOST FIRST NOT LEAST NEXT NOW BEFORE TRUE THIRD".split()
DIGIT = "oh one two three four five six seven eight nine".split()


def spell(word: str, plural: bool = False) -> str:
    """NDA -> "N D Eigh", NDAs -> "N D Eighs" (the engine reads a lone A as "uh")."""
    parts = ["Eigh" if c == "A" else c for c in word]
    if plural:
        parts[-1] += "s" if parts[-1] == "Eigh" else "'s"
    return " ".join(parts)


def spoken(text: str) -> str:
    s = text
    m = re.fullmatch(r"([ABCD])\.", s)                       # option letters read alone
    if m:
        return LETTERS[m.group(1)] + "."
    s = re.sub(r"\bThe answer is ([ABCD])\.", lambda m: f"The answer is {LETTERS[m.group(1)]}.", s)
    s = s.replace("e.g.", "for example").replace("i.e.", "that is").replace("vs.", "versus")
    s = re.sub(r"\b270(\d)(\d)\b", lambda m: f"twenty-seven {DIGIT[0]} {DIGIT[int(m.group(1))]} {DIGIT[int(m.group(2))]}"
               if m.group(1) == "0" else f"twenty-seven oh {DIGIT[int(m.group(1))]} {DIGIT[int(m.group(2))]}", s)
    s = re.sub(r"\b800-(\d+)\b", r"800 dash \1", s)
    s = re.sub(r"\bEUR (\d[\d,.]*)( (?:thousand|million|billion))?", r"\1\2 euros", s)
    for k, v in WORDS.items():
        s = re.sub(rf"(?<![A-Za-z0-9]){re.escape(k)}(?![A-Za-z0-9])", v, s)
    for w in EMPHASIS:
        s = re.sub(rf"\b{w}\b", w.lower(), s)
    for w in SPELL:                                           # NDA -> N D A, NDAs -> N D A's
        s = re.sub(rf"\b{w}(s?)\b", lambda m, w=w: spell(w, plural=bool(m.group(1))), s)
    s = re.sub(r"(?<=[A-Za-z])/(?=[A-Za-z])", ", ", s)
    return re.sub(r"\s+", " ", s).strip()


def to_mp3(samples: np.ndarray) -> bytes:
    pcm = np.concatenate([np.zeros(int(0.04 * RATE), np.float32), samples.astype(np.float32),
                          np.zeros(int(TAIL_SEC * RATE), np.float32)])
    out = subprocess.run(["ffmpeg", "-loglevel", "error", "-f", "f32le", "-ar", str(RATE), "-ac", "1", "-i", "-",
                          "-codec:a", "libmp3lame", "-b:a", "40k", "-f", "mp3", "-"],
                         input=pcm.tobytes(), capture_output=True, check=True)
    return out.stdout


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("lines")
    ap.add_argument("--models", required=True, help="folder holding kokoro-v1.0.onnx and voices-v1.0.bin")
    ap.add_argument("--out", default=os.path.join(ROOT, "audio"))
    ap.add_argument("--check", nargs="*", help="print the spoken text and phonemes for these strings, then exit")
    a = ap.parse_args()

    from kokoro_onnx import Kokoro
    tts = Kokoro(os.path.join(a.models, "kokoro-v1.0.onnx"), os.path.join(a.models, "voices-v1.0.bin"))

    if a.check is not None:
        for t in a.check:
            sp = spoken(t)
            print(f"{t!r}\n  -> {sp!r}\n  -> {tts.tokenizer.phonemize(sp, 'en-us')}")
        return

    lines = json.load(open(a.lines))
    voices = {w: v for w, (v, _) in VOICES.items()}
    os.makedirs(a.out, exist_ok=True)
    packs = {}
    for ln in lines:
        packs.setdefault(ln["pack"], []).append(ln)

    total = len(lines); done = 0; t0 = time.time()
    for pack in sorted(packs, key=lambda p: (p != "common", [int(x) if x.isdigit() else 0 for x in p.split(".")])):
        path = os.path.join(a.out, pack + ".json")
        old = json.load(open(path)) if os.path.exists(path) else {}
        keep = old.get("clips", {}) if old.get("voices") == voices else {}
        clips = {}
        for ln in packs[pack]:
            done += 1
            if ln["key"] in keep:
                clips[ln["key"]] = keep[ln["key"]]
                continue
            voice, lang = VOICES[ln["who"]]
            samples, sr = tts.create(spoken(ln["text"]), voice=voice, speed=1.0, lang=lang)
            assert sr == RATE, sr
            clips[ln["key"]] = base64.b64encode(to_mp3(samples)).decode()
            if done % 25 == 0:
                print(f"{done}/{total} clips  {time.time() - t0:.0f}s", flush=True)
        with open(path, "w") as f:
            json.dump({"v": 1, "voices": voices, "clips": clips}, f, separators=(",", ":"))
        print(f"wrote {pack}.json  {len(clips)} clips  {os.path.getsize(path) / 1e6:.1f} MB", flush=True)
    print(f"done in {time.time() - t0:.0f}s")


if __name__ == "__main__":
    sys.exit(main())
