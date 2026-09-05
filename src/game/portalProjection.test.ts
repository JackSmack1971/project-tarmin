import { describe, expect, it } from "vitest";
import { intervalQuads, PORTAL_FRAMES } from "./portalProjection";

describe("nested portal projection", () => {
  it("keeps every portal centered while contracting in both axes", () => {
    const centers = PORTAL_FRAMES.map((frame) => ({ x: (frame.left + frame.right) / 2, y: (frame.top + frame.bottom) / 2 }));
    expect(centers.every((center) => center.x === 0.5 && center.y >= 0.5)).toBe(true);
    for (let index = 1; index < PORTAL_FRAMES.length; index += 1) {
      expect(PORTAL_FRAMES[index].right - PORTAL_FRAMES[index].left).toBeLessThan(PORTAL_FRAMES[index - 1].right - PORTAL_FRAMES[index - 1].left);
      expect(PORTAL_FRAMES[index].bottom - PORTAL_FRAMES[index].top).toBeLessThan(PORTAL_FRAMES[index - 1].bottom - PORTAL_FRAMES[index - 1].top);
    }
  });

  it("constructs four explicit surfaces between adjacent frames", () => {
    const surfaces = intervalQuads(PORTAL_FRAMES[0], PORTAL_FRAMES[1]);
    expect(Object.keys(surfaces)).toEqual(["leftWall", "rightWall", "ceiling", "floor"]);
    expect(surfaces.leftWall[0]).toEqual({ x: 0, y: 0 });
    expect(surfaces.leftWall[1]).toEqual({ x: 0.17, y: 0.23 });
  });
});
