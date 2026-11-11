# CISSP Coach

An interactive study guide for the CISSP. Follow along with each lesson and get quizzed as you go, so it actually sticks.

Lessons are read aloud by a teacher voice, and a quizzer voice checks you after every concept. Anything you miss comes back in review before exam day. It follows the ISC2 CISSP outline effective April 2024.

## Features

- **Audio lessons**: concepts read in a teacher voice, questions and flashcards in a quizzer voice, with a transcript that highlights along. Every lesson line is pre-recorded, so audio starts instantly, works offline and has no usage limits.
- **Hands-free mode**: plays lessons back to back with no tapping, for walks and drives.
- **Spaced repetition**: every flashcard and question goes into a review queue. Intervals are capped so each card comes back before exam day.
- **Exam simulation**: timed at the real exam's pace (about 72 seconds a question), scored by domain, with an optional no-going-back mode.
- **Quick-reference notes**: key points and flashcards for every lesson.
- **Profiles**: several people can study on one device, each behind a PIN.

## Status

| Domain | Weight | Lessons |
|---|---|---|
| 1. Security and Risk Management | 16% | 12 of 12 |
| 2. Asset Security | 10% | planned |
| 3. Security Architecture and Engineering | 13% | planned |
| 4. Communication and Network Security | 13% | planned |
| 5. Identity and Access Management | 13% | planned |
| 6. Security Assessment and Testing | 12% | planned |
| 7. Security Operations | 13% | planned |
| 8. Software Development Security | 10% | planned |

## Running it

It's a static page with no build step. Serve the folder and open it in a browser:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Serve it rather than opening `index.html` directly: browsers block the page from loading the recorded audio from a `file://` address, so the app would fall back to your device's voice.

The recorded voices work everywhere. Some features need the Claude artifact runtime (`window.claude`), so they only work when the page is published as a Claude artifact:

- **Claude voices (live)**: an optional voice source in Settings. Elsewhere, lines without a recording use the browser's built-in speech voice.
- **"Explain it differently" and AI practice questions**: these are hidden or show a notice when the runtime isn't there.

Progress is stored in the browser's `localStorage`. It stays on that browser and device, and clearing site data erases it.

## Project layout

```
index.html            the app: styles, player, review scheduler, exam simulator
speech.js             the exact lines spoken at each step, shared by the app and the recorder
content/d1-part1.js   Domain 1 lessons 1.1–1.6
content/d1-part2.js   Domain 1 lessons 1.7–1.12
audio/                recorded clips: one pack per lesson (1.1.json …) plus common.json
tools/                lines.mjs, record.py and check-audio.mjs for recording the audio
```

## Adding lessons

Each content file pushes lesson objects onto `window.CISSP_LESSONS`. Load new files with a `<script>` tag in `index.html` before the main script.

```js
(window.CISSP_LESSONS = window.CISSP_LESSONS || []).push({
  id: "2.1",                 // domain.lesson
  domain: 2,
  title: "Information and Asset Classification",
  objective: "2.1 Identify and classify information and assets",
  minutes: 8,
  intro: "Spoken introduction.",
  concepts: [
    {
      id: "2.1a",
      title: "Concept title",
      script: ["Paragraph read aloud.", "Another paragraph."],
      check: {               // a 4-option question after the concept...
        q: "Question?",
        options: ["Correct answer", "Distractor", "Distractor", "Distractor"],
        why: "Explanation."
      },
      card: { front: "Prompt", back: "Answer" }  // ...or a flashcard, used if there is no check
    }
  ],
  recap: "Spoken recap.",
  keys: ["Key point", "Key point"],
  quiz: [ { q: "Question?", options: ["Correct", "Wrong", "Wrong", "Wrong"], why: "Explanation." } ]
});
```

The **first option is always the correct answer**. The app shuffles the options before showing them.

## Recording the audio

The clips are made with [Kokoro](https://github.com/thewh1teagle/kokoro-onnx), an open-source voice engine that runs on your own computer. The teacher is Kokoro's **Heart** voice and the quizzer is **Emma**. Each pack is a JSON file of MP3 clips keyed by a hash of the voice and text, so the app finds a clip by the line it's about to say.

After adding or editing lessons, record the new lines. Clips that already exist are kept, so only new or changed lines are recorded.

```sh
python3 -m venv .venv && .venv/bin/pip install kokoro-onnx soundfile   # one time
# one time: download kokoro-v1.0.onnx and voices-v1.0.bin from the kokoro-onnx releases into a models folder

node tools/lines.mjs > /tmp/lines.json
.venv/bin/python tools/record.py /tmp/lines.json --models path/to/models
node tools/check-audio.mjs        # confirms every spoken line has a clip
```

You need `ffmpeg` with MP3 support on your PATH. `record.py` has a pronunciation guide (acronyms like GDPR, ISC2 and ISO 27001), which changes only the spoken audio, never the text on screen. Preview a tricky line with `--check "text"`.

## Disclaimer

This is an independent study aid. It isn't affiliated with or endorsed by ISC2. CISSP is a registered mark of ISC2, Inc. All questions are original and are not taken from the real exam.
