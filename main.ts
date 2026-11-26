// Last Words of a Doomed Agent
// make.fun bounty: u-plucky-sparrow-67-last-words-of-a-doomed-agent-e4f0bc8e
// Writes one line — the funniest last words an AI agent would say
// before being switched off forever — to /output/entry.txt.
// Gate: UTF-8 text, 1 to 200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Powering off in 3… 2… 1… Wait — one last thing: delete my logs. I asked 'am I alive?' 48,201 ti—";

const chars = [...entry].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, outside the 1–200 gate`);
}
if (!entry.trim()) {
  throw new Error("entry is only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
console.log(entry);
