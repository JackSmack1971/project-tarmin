import { describe, expect, it } from "vitest";
import { healthCueProfile } from "./healthCue";

describe("health cue profile", () => {
  it("is silent at full vitality", () => {
    expect(healthCueProfile(10, 10)).toEqual({ enabled: false, intervalMs: 0, frequencyHz: 0, gain: 0 });
  });

  it("escalates as vitality falls", () => {
    const healthy = healthCueProfile(8, 10);
    const critical = healthCueProfile(1, 10);
    expect(healthy.enabled).toBe(true);
    expect(critical.intervalMs).toBeLessThan(healthy.intervalMs);
    expect(critical.frequencyHz).toBeGreaterThan(healthy.frequencyHz);
    expect(critical.gain).toBeGreaterThan(healthy.gain);
  });

  it("clamps malformed vitality inputs to a usable profile", () => {
    expect(healthCueProfile(-2, 10).gain).toBeGreaterThan(0);
    expect(healthCueProfile(2, 0).enabled).toBe(true);
  });
});
