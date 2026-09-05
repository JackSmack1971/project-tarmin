import { describe, expect, it } from "vitest";
import { intervalQuads, PORTAL_FRAMES } from "./portalProjection";

describe("nested portal projection", () => {
  it("keeps every normalized portal valid and nested while contracting aggressively", () => {
    expect(PORTAL_FRAMES.every((frame) => frame.left >= 0 && frame.right <= 1 && frame.top >= 0 && frame.bottom <= 1)).toBe(true);
    for (let index = 1; index < PORTAL_FRAMES.length; index += 1) {
      expect(PORTAL_FRAMES[index].left).toBeGreaterThan(PORTAL_FRAMES[index - 1].left);
      expect(PORTAL_FRAMES[index].right).toBeLessThan(PORTAL_FRAMES[index - 1].right);
      expect(PORTAL_FRAMES[index].top).toBeGreaterThan(PORTAL_FRAMES[index - 1].top);
      expect(PORTAL_FRAMES[index].bottom).toBeLessThan(PORTAL_FRAMES[index - 1].bottom);
      expect(PORTAL_FRAMES[index].right - PORTAL_FRAMES[index].left).toBeLessThan(PORTAL_FRAMES[index - 1].right - PORTAL_FRAMES[index - 1].left);
      expect(PORTAL_FRAMES[index].bottom - PORTAL_FRAMES[index].top).toBeLessThan(PORTAL_FRAMES[index - 1].bottom - PORTAL_FRAMES[index - 1].top);
    }
    expect(PORTAL_FRAMES[1].right - PORTAL_FRAMES[1].left).toBeGreaterThan(0.75);
    expect(PORTAL_FRAMES[4].right - PORTAL_FRAMES[4].left).toBeLessThan(0.12);
  });

  it("constructs four explicit surfaces between adjacent frames", () => {
    const surfaces = intervalQuads(PORTAL_FRAMES[0], PORTAL_FRAMES[1]);
    expect(Object.keys(surfaces)).toEqual(["leftWall", "rightWall", "ceiling", "floor"]);
    expect(surfaces.leftWall[0]).toEqual({ x: PORTAL_FRAMES[0].left, y: PORTAL_FRAMES[0].top });
    expect(surfaces.leftWall[1]).toEqual({ x: PORTAL_FRAMES[1].left, y: PORTAL_FRAMES[1].top });
  });
});
