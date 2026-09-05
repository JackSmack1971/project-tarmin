import { describe, expect, it } from "vitest";
import { atlasUvQuad, meshVertices, QUAD_INDICES } from "./meshGeometry";

describe("dungeon Mesh2D geometry", () => {
  it("maps each material to its inset atlas swatch", () => {
    const uv = atlasUvQuad("iron-door");
    expect(uv[0][0]).toBeCloseTo(32.25 / 64);
    expect(uv[1][0]).toBeCloseTo(39.75 / 64);
    expect(uv[0][1]).toBeCloseTo(0.25 / 8);
    expect(uv[2][1]).toBeCloseTo(7.75 / 8);
  });

  it("preserves projected corners while supplying four textured vertices", () => {
    const quad = [{ x: 0.1, y: 0.2 }, { x: 0.8, y: 0.2 }, { x: 0.7, y: 0.9 }, { x: 0.2, y: 0.9 }] as const;
    const vertices = meshVertices(quad, "crypt-stone");
    expect(vertices).toHaveLength(16);
    expect(vertices.filter((_, index) => index % 4 < 2)).toEqual(quad.flatMap(({ x, y }) => [x, y]));
    expect(QUAD_INDICES).toEqual([0, 1, 2, 0, 0, 2, 3, 0]);
  });
});
