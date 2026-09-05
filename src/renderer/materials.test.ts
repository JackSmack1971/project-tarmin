import { describe, expect, it } from "vitest";
import { MATERIALS, materialFor } from "./materials";
import { DUNGEON_SURFACE_ATLAS } from "./assets/dungeonAtlas";

describe("renderer-neutral dungeon materials", () => {
  it("registers every atlas region used by the surface materials", () => {
    const regions = new Set(DUNGEON_SURFACE_ATLAS.regions.map((region) => region.id));
    for (const material of Object.values(MATERIALS)) expect(regions.has(material.atlasRegion)).toBe(true);
  });

  it("uses padded canonical 32px regions without overlap", () => {
    expect(DUNGEON_SURFACE_ATLAS.source).toBe("/assets/dungeon/dungeon-surfaces.png");
    expect(DUNGEON_SURFACE_ATLAS.pixelSize).toBe(32);
    for (const region of DUNGEON_SURFACE_ATLAS.regions) {
      expect(region.width).toBe(32);
      expect(region.height).toBe(32);
      expect(region.x).toBeGreaterThan(0);
      expect(region.y).toBeGreaterThan(0);
      expect(region.x + region.width).toBeLessThan(DUNGEON_SURFACE_ATLAS.width);
      expect(region.y + region.height).toBeLessThan(DUNGEON_SURFACE_ATLAS.height);
    }
    for (const [index, region] of DUNGEON_SURFACE_ATLAS.regions.entries()) {
      for (const other of DUNGEON_SURFACE_ATLAS.regions.slice(index + 1)) {
        const overlaps = region.x < other.x + other.width && region.x + region.width > other.x
          && region.y < other.y + other.height && region.y + region.height > other.y;
        expect(overlaps).toBe(false);
      }
    }
  });

  it("keeps material selection presentation-only and stable", () => {
    expect(materialFor("closed-door", "front", 0)).toBe("timber-door");
    expect(materialFor("closed-door", "front", 1)).toBe("iron-door");
    expect(materialFor("passage", "left", 3)).toBe("darkness");
    expect(materialFor("wall", "floor", 2)).toBe("floor-stone");
  });
});
