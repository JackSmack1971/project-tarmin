import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const files = process.argv.slice(2).length > 0
  ? process.argv.slice(2)
  : [
      "harness/build/persistent-dungeon-world-acceptance.md",
      "harness/build/mvp-content-population-acceptance.md",
    ];

const rowPattern = /^\|\s*([A-Z]+-\d+)\s*\|.*\|\s*(passed)\s*\|\s*$/i;
const anyRowPattern = /^\|\s*([A-Z]+-\d+)\s*\|/;
const summaryPattern = /Passed:\s*([A-Z]+-\d+)\s+through\s+([A-Z]+-\d+)\b/i;

function expandRange(first, last) {
  const [prefix, firstNumber] = first.split("-");
  const [, lastNumber] = last.split("-");
  return Array.from(
    { length: Number(lastNumber) - Number(firstNumber) + 1 },
    (_, index) => `${prefix}-${String(Number(firstNumber) + index).padStart(2, "0")}`,
  );
}

let failures = 0;
for (const file of files) {
  const lines = (await readFile(resolve(file), "utf8")).split(/\r?\n/);
  const rows = lines.filter((line) => anyRowPattern.test(line));
  const summary = lines.find((line) => summaryPattern.test(line));
  if (!summary) {
    console.error(`${file}: missing a ranged post-implementation summary`);
    failures += 1;
    continue;
  }

  const [, first, last] = summary.match(summaryPattern);
  const expected = new Set(expandRange(first, last));
  for (const line of rows) {
    const id = line.match(anyRowPattern)[1];
    if (expected.has(id) && !rowPattern.test(line)) {
      console.error(`${file}: ${id} does not have status 'passed' to match its summary`);
      failures += 1;
    }
  }

  const found = new Set(rows.map((line) => line.match(anyRowPattern)[1]));
  for (const id of expected) {
    if (!found.has(id)) {
      console.error(`${file}: summary names ${id}, but no acceptance row exists`);
      failures += 1;
    }
  }
}

if (failures > 0) process.exitCode = 1;
else console.log(`Acceptance status check passed for ${files.length} matrix files.`);
