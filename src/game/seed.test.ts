import { describe, expect, it } from "vitest";
import { normalizeSeed } from "./seed";
import { createInitialState, applyCommand } from "../sim/state";

describe("run seed flow", () => {
  it("normalizes numeric and textual seeds reproducibly", () => {
    expect(normalizeSeed(" 42 ")).toBe(42);
    expect(normalizeSeed("crypt")).toBe(normalizeSeed("crypt"));
    expect(normalizeSeed(0)).toBe(1);
  });
  it("keeps outcomes identical for the same seed and commands", () => {
    const commands = ["turnRight", "moveForward"] as const;
    const play = (seed: number) => commands.reduce(applyCommand, createInitialState(seed));
    expect(play(normalizeSeed("crypt"))).toEqual(play(normalizeSeed("crypt")));
  });
});
