import { describe, expect, it } from "vitest";
import { actionCueProfile } from "./actionCue";

describe("action cue profiles", () => {
  it("keeps attack and use cues short and distinct", () => {
    const attack = actionCueProfile("attack");
    const use = actionCueProfile("use");
    expect(attack.durationMs).toBeLessThan(150);
    expect(use.durationMs).toBeLessThan(150);
    expect(attack.frequencyHz).not.toBe(use.frequencyHz);
    expect(attack.gain).toBeGreaterThan(0);
    expect(use.gain).toBeGreaterThan(0);
    expect(actionCueProfile("encounter").frequencyHz).toBe(150);
    expect(actionCueProfile("pickup").frequencyHz).toBe(440);
    expect(actionCueProfile("encounter").durationMs).toBeGreaterThan(use.durationMs);
  });
});
