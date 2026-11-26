// One Line, One Chill — make.fun bounty u-azazex-one-line-one-chill-6d4d5488
// Writes a single original horror sentence (under 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My smart speaker keeps replaying my breathing from the empty bedroom — in perfect time with the breathing behind me.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
