import { describe, expect, it } from "vitest";
import { ambientCueProfile } from "./ambientCue";

describe("ambient cue", () => {
  it("is a sparse, low-intensity non-musical punctuation profile", () => {
    const profile = ambientCueProfile();
    expect(profile.frequencyHz).toBeLessThan(200);
    expect(profile.gain).toBeLessThan(0.01);
    expect(profile.durationMs).toBeLessThan(profile.intervalMs);
    expect(profile.intervalMs).toBeGreaterThan(5000);
  });
});
