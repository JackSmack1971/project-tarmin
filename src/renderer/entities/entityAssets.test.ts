import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, test } from "vitest";

describe("Warden billboard asset", () => {
  test("keeps the two-frame 32x48 billboard contract and project palette", () => {
    const asset = readFileSync(resolve(process.cwd(), "public/assets/entities/ashbound-warden.svg"), "utf8");
    expect(asset).toContain('width="64" height="48" viewBox="0 0 64 48"');
    expect(asset.match(/transform="translate\((?:0|32) 0\)"/g)).toHaveLength(2);
    expect(asset).toContain("#80725c");
    expect(asset).toContain("#6d4e35");
    expect(asset).toContain("#e46a3d");
    expect(asset).not.toMatch(/doomgeon|reference creature/i);
  });
});
