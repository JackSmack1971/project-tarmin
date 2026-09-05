import { describe, expect, it } from "vitest";
import { atlasUvQuad, meshVertices, QUAD_INDICES } from "./meshGeometry";
import { DUNGEON_SURFACE_ATLAS } from "./assets/dungeonAtlas";
import { MATERIALS, type MaterialId } from "./materials";

describe("dungeon Mesh2D geometry", () => {
  it("maps each material to its inset atlas swatch", () => {
    const uv = atlasUvQuad("iron-door");
    expect(uv[0][0]).toBeCloseTo(1.25 / 136);
    expect(uv[1][0]).toBeCloseTo(32.75 / 136);
    expect(uv[0][1]).toBeCloseTo(35.25 / 68);
    expect(uv[2][1]).toBeCloseTo(66.75 / 68);
  });

  it("keeps every UV corner inside its assigned atlas region", () => {
    for (const material of Object.keys(MATERIALS) as MaterialId[]) {
      const region = DUNGEON_SURFACE_ATLAS.regions.find(({ id }) => id === MATERIALS[material].atlasRegion)!;
      const uv = atlasUvQuad(material);
      for (const [x, y] of uv) {
        expect(x).toBeGreaterThan(region.x / DUNGEON_SURFACE_ATLAS.width);
        expect(x).toBeLessThan((region.x + region.width) / DUNGEON_SURFACE_ATLAS.width);
        expect(y).toBeGreaterThan(region.y / DUNGEON_SURFACE_ATLAS.height);
        expect(y).toBeLessThan((region.y + region.height) / DUNGEON_SURFACE_ATLAS.height);
      }
    }
  });

  it("preserves projected corners while supplying four textured vertices", () => {
    const quad = [{ x: 0.1, y: 0.2 }, { x: 0.8, y: 0.2 }, { x: 0.7, y: 0.9 }, { x: 0.2, y: 0.9 }] as const;
    const vertices = meshVertices(quad, "crypt-stone");
    expect(vertices).toHaveLength(16);
    expect(vertices.filter((_, index) => index % 4 < 2)).toEqual(quad.flatMap(({ x, y }) => [x, y]));
    expect(QUAD_INDICES).toEqual([0, 1, 2, 0, 0, 2, 3, 0]);
  });
});
