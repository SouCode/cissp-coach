/* Spoken lines for every step of the app.
   The app and tools/lines.mjs both build speech from these functions, so the
   recorded clips in audio/ always match what the app asks to hear.
   Each line is {text, who, id}: who "t" = teacher voice, "q" = quizzer voice,
   id (optional) = transcript paragraph to highlight while it plays. */
(function (g) {
  "use strict";
  const LETTERS = "ABCD";
  const T = (text, id) => ({ text, who: "t", id });
  const Q = (text, id) => ({ text, who: "q", id });

  const S = {
    T, Q, LETTERS,

    intro: l => [T(`Lesson ${l.id}. ${l.title}.`), T(l.intro)],
    concept: c => [T(c.title + ".", "t0"), ...c.script.map((p, j) => T(p, "p" + j))],
    cardFront: (front, inLesson) => (inLesson ? [Q("Flashcard."), Q(front)] : [Q(front)]),
    cardBack: back => [Q(back)],
    recap: l => [T("Let's recap.", "t0"), T(l.recap, "p0")],

    /* prefix: "Quick check.", "Question 2." or "" ; ord: shuffled option indexes, 0 = correct */
    question: (prefix, q, opts, ord) => [
      ...(prefix ? [Q(prefix)] : []),
      Q(q),
      ...ord.flatMap((o, k) => [Q(LETTERS[k] + "."), Q(opts[o])])
    ],

    /* mode: "right" (answered correctly), "wrong" (answered wrong), "reveal" (hands-free or a missed review) */
    feedback: (mode, opts, ord, why) => {
      const answer = [T(`The answer is ${LETTERS[ord.indexOf(0)]}.`), T(opts[0])];
      if (mode === "right") return [T("Correct."), T(why)];
      if (mode === "wrong") return [T("Not quite."), ...answer, T(why)];
      return [...answer, T(why)];
    },

    lessonDone: (l, next, handsFree, right, total) => handsFree
      ? [T(`That's the end of lesson ${l.id}.`), T("Its flashcards and questions are waiting in your review."),
         ...(next ? [T(`Next up, lesson ${next.id}, ${next.title}.`)] : [])]
      : [T("Lesson complete."), T(`You got ${right} of ${total} review questions right.`),
         T("Everything from this lesson is now scheduled for review.")],

    reviewDone: () => [T("Review complete.")],
    noteRecap: l => [T(`Lesson ${l.id}. ${l.title}.`), T(l.recap)],
    preview: who => who === "t"
      ? [T("Confidentiality, integrity and availability. The C I A triad is the foundation of everything you'll learn.")]
      : [Q("Flashcard."), Q("Which canon of the I S C squared Code of Ethics comes first?")],

    /* Clip key: FNV-1a 32-bit over UTF-8 of who|text, whitespace collapsed. Mirrored in tools/record.py. */
    norm: s => String(s).replace(/\s+/g, " ").trim(),
    key(who, text) {
      const bytes = new TextEncoder().encode(who + "|" + S.norm(text));
      let h = 0x811c9dc5;
      for (const b of bytes) { h ^= b; h = Math.imul(h, 0x01000193) >>> 0; }
      return h.toString(16).padStart(8, "0");
    }
  };

  g.SPEECH = S;
})(typeof window !== "undefined" ? window : globalThis);
