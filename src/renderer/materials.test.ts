import { describe, expect, it } from "vitest";
import { MATERIALS, materialFor } from "./materials";
import { DUNGEON_SURFACE_ATLAS } from "./assets/dungeonAtlas";

describe("renderer-neutral dungeon materials", () => {
  it("registers every atlas region used by the surface materials", () => {
    const regions = new Set(DUNGEON_SURFACE_ATLAS.regions.map((region) => region.id));
    for (const material of Object.values(MATERIALS)) expect(regions.has(material.atlasRegion)).toBe(true);
  });

  it("keeps material selection presentation-only and stable", () => {
    expect(materialFor("closed-door", "front", 0)).toBe("timber-door");
    expect(materialFor("closed-door", "front", 1)).toBe("iron-door");
    expect(materialFor("passage", "left", 3)).toBe("darkness");
    expect(materialFor("wall", "floor", 2)).toBe("floor-stone");
  });
});
