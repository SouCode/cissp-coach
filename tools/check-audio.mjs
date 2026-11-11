// Confirms every line the app speaks has a recorded clip in audio/.
// Replays each lesson and review the way index.html does, with random answer orders.
// Usage: node tools/check-audio.mjs
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ctx = { window: {}, TextEncoder };
vm.createContext(ctx);
vm.runInContext(readFileSync(join(root, "speech.js"), "utf8"), ctx);
for (const f of readdirSync(join(root, "content")).filter(f => f.endsWith(".js")).sort())
  vm.runInContext(readFileSync(join(root, "content", f), "utf8"), ctx);
const S = ctx.window.SPEECH;
const idCmp = (a, b) => { const x = a.split(".").map(Number), y = b.split(".").map(Number); return x[0] - y[0] || x[1] - y[1]; };
const lessons = ctx.window.CISSP_LESSONS.filter(l => l && l.id && Array.isArray(l.concepts)).sort((a, b) => idCmp(a.id, b.id));

const clips = new Set();
for (const f of existsSync(join(root, "audio")) ? readdirSync(join(root, "audio")).filter(f => f.endsWith(".json")) : [])
  Object.keys(JSON.parse(readFileSync(join(root, "audio", f), "utf8")).clips).forEach(k => clips.add(k));

const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const missing = new Map(); let spoken = 0;
const say = (where, lines) => { for (const l of lines.filter(l => l.text)) { spoken++; const k = S.key(l.who, l.text); if (!clips.has(k)) missing.set(k, `${where}  [${l.who}] ${l.text.slice(0, 80)}`); } };

for (let run = 0; run < 20; run++) {
  lessons.forEach((l, i) => {
    const nx = lessons[i + 1];
    say(`${l.id} intro`, S.intro(l));
    for (const c of l.concepts) {
      say(`${l.id} concept`, S.concept(c));
      if (c.check && c.check.options && c.check.options.length === 4) {
        const ord = shuffle([0, 1, 2, 3]);
        say(`${l.id} check`, S.question("Quick check.", c.check.q, c.check.options, ord));
        for (const m of ["right", "wrong", "reveal"]) say(`${l.id} check feedback`, S.feedback(m, c.check.options, ord, c.check.why));
      } else if (c.card) {
        say(`${l.id} card`, [...S.cardFront(c.card.front, true), ...S.cardBack(c.card.back), ...S.cardFront(c.card.front, false)]);
      }
    }
    say(`${l.id} recap`, S.recap(l));
    (l.quiz || []).forEach((q, n) => {
      const ord = shuffle([0, 1, 2, 3]);
      say(`${l.id} quiz`, S.question(`Question ${n + 1}.`, q.q, q.options, ord));
      say(`${l.id} review`, S.question("", q.q, q.options, ord));
      for (const m of ["right", "wrong", "reveal"]) say(`${l.id} quiz feedback`, S.feedback(m, q.options, ord, q.why));
    });
    const total = (l.quiz || []).length;
    say(`${l.id} done`, S.lessonDone(l, nx, false, Math.floor(Math.random() * (total + 1)), total));
    say(`${l.id} done hands-free`, S.lessonDone(l, nx, true, 0, 0));
    say(`${l.id} notes`, S.noteRecap(l));
  });
}
say("review done", S.reviewDone());
say("preview", [...S.preview("t"), ...S.preview("q")]);

console.log(`${clips.size} clips recorded; ${spoken} lines checked; ${missing.size} without a clip`);
for (const m of [...missing.values()].slice(0, 20)) console.log("  missing:", m);
process.exit(missing.size ? 1 : 0);
