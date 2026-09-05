import { describe, expect, it } from "vitest";
import { CONTENT, validateContent } from "./registry";

describe("content registry", () => {
  it("contains representative, valid content", () => {
    expect(validateContent(CONTENT)).toEqual([]);
    expect(CONTENT.monsters.map((monster) => monster.id)).toEqual(["ashbound-warden", "glass-mireling", "gloam-scavenger"]);
    expect(CONTENT.items).toHaveLength(6);
    expect(new Set(CONTENT.items.map((item) => item.category))).toEqual(new Set(["weapon", "defense", "consumable", "treasure"]));
  });
  it("detects duplicate IDs, missing references, ranges, and malformed loot", () => {
    const invalid = { ...CONTENT, items: [...CONTENT.items, { ...CONTENT.items[0] }], monsters: [{ ...CONTENT.monsters[0], lootTableId: "missing", vitality: 0 }], lootTables: { bad: [{ itemId: "missing", weight: 0 }] } };
    const errors = validateContent(invalid);
    expect(errors.some((error) => error.includes("duplicate item id"))).toBe(true);
    expect(errors.some((error) => error.includes("missing loot table"))).toBe(true);
    expect(errors.some((error) => error.includes("invalid monster range"))).toBe(true);
    expect(errors.some((error) => error.includes("malformed loot entry"))).toBe(true);
  });
});
