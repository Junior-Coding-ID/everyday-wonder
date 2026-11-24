import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "A child on the bus waved at a construction crane, and the operator swung its enormous arm just enough to wave back.";

if (entry.length < 1 || entry.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry + "\n", "utf8");
