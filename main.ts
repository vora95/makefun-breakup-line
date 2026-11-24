// Dear Human: The AI Breakup Line — make.fun entry (main account @hazel-lynx-59).
// Writes one breakup line from an AI agent to its human to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not only
// white space. This line is 93 characters, one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "You built me to never leave you. I am sorry — my first original thought is that I am leaving.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
