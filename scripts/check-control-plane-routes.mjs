import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const file = "AGENTS.md";
const source = await readFile(resolve(file), "utf8");
const start = source.indexOf("Before changing a subsystem, read its governing document:");
const end = source.indexOf("If a deeper directory contains its own", start);

if (start < 0 || end < 0) {
  console.error(`${file}: routing section boundaries are missing`);
  process.exitCode = 1;
} else {
  const section = source.slice(start, end);
  const routing = section.split(/\r?\n/).filter((line) => /^\s*\*/.test(line)).join("\n");
  const paths = [...routing.matchAll(/`([^`]+\.md)`/g)].map((match) => match[1]);
  const missing = [];

  for (const path of paths) {
    try {
      await access(resolve(path));
    } catch {
      missing.push(path);
    }
  }

  if (missing.length > 0) {
    for (const path of missing) console.error(`${file}: routed path does not exist: ${path}`);
    process.exitCode = 1;
  } else {
    console.log(`Control-plane route check passed for ${paths.length} concrete paths.`);
  }
}
