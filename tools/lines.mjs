// Lists every line the app can speak from recordings, grouped into packs.
// Usage: node tools/lines.mjs > lines.json
// Output: [{pack, who, text, key}]  pack = lesson id ("1.1") or "common"
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ctx = { window: {}, TextEncoder };
ctx.globalThis = ctx;
vm.createContext(ctx);
vm.runInContext(readFileSync(join(root, "speech.js"), "utf8"), ctx);
for (const f of readdirSync(join(root, "content")).filter(f => f.endsWith(".js")).sort())
  vm.runInContext(readFileSync(join(root, "content", f), "utf8"), ctx);

const S = ctx.window.SPEECH;
const idCmp = (a, b) => { const x = a.split(".").map(Number), y = b.split(".").map(Number); return x[0] - y[0] || x[1] - y[1]; };
const lessons = (ctx.window.CISSP_LESSONS || []).filter(l => l && l.id && Array.isArray(l.concepts)).sort((a, b) => idCmp(a.id, b.id));

// Four orders that put the correct option (index 0) under A, B, C and D.
const ORDERS = [[0, 1, 2, 3], [1, 0, 2, 3], [1, 2, 0, 3], [1, 2, 3, 0]];
const byKey = new Map();          // key -> {who, text, packs:Set}
const add = (pack, lines) => {
  for (const l of lines) {
    if (!l.text) continue;
    const key = S.key(l.who, l.text);
    if (!byKey.has(key)) byKey.set(key, { who: l.who, text: S.norm(l.text), packs: new Set() });
    byKey.get(key).packs.add(pack);
  }
};
const addQuestion = (pack, prefix, q) => {
  for (const ord of ORDERS) {
    add(pack, S.question(prefix, q.q, q.options, ord));
    for (const mode of ["right", "wrong", "reveal"]) add(pack, S.feedback(mode, q.options, ord, q.why));
  }
};

let maxQuiz = 0;
lessons.forEach((l, i) => {
  const p = l.id, next = lessons[i + 1] || null;
  add(p, S.intro(l));
  for (const c of l.concepts) {
    add(p, S.concept(c));
    if (c.check && Array.isArray(c.check.options) && c.check.options.length === 4) addQuestion(p, "Quick check.", c.check);
    else if (c.card) { add(p, S.cardFront(c.card.front, true)); add(p, S.cardFront(c.card.front, false)); add(p, S.cardBack(c.card.back)); }
  }
  add(p, S.recap(l));
  (l.quiz || []).forEach((q, n) => addQuestion(p, `Question ${n + 1}.`, q));
  maxQuiz = Math.max(maxQuiz, (l.quiz || []).length);
  add(p, S.lessonDone(l, next, true, 0, 0));
  add(p, S.noteRecap(l));
});

// Score lines for every possible lesson result, plus fixed phrases.
for (let total = 1; total <= maxQuiz; total++)
  for (let right = 0; right <= total; right++) add("common", S.lessonDone(lessons[0], null, false, right, total));
add("common", S.reviewDone());
add("common", S.preview("t"));
add("common", S.preview("q"));

// Anything used by more than one pack is shared.
const out = [];
for (const [key, v] of byKey) {
  const pack = v.packs.size > 1 || v.packs.has("common") ? "common" : [...v.packs][0];
  out.push({ pack, who: v.who, text: v.text, key });
}
process.stdout.write(JSON.stringify(out, null, 1));
