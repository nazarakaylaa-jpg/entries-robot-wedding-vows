// One-Line Robot Wedding Vows — make.fun entry.
// Writes a single line of robot wedding vows to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I take you to be my partner, in sickness and in low battery, through every firmware update — and I promise to never factory-reset the day I met you.";

const MAX_CHARS = 160;

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `Entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}.`,
  );
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single line.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry (${ENTRY.length} characters).`);
