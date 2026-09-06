export interface AmbientCueProfile {
  readonly frequencyHz: number;
  readonly durationMs: number;
  readonly gain: number;
  readonly intervalMs: number;
}

export function ambientCueProfile(): AmbientCueProfile {
  return { frequencyHz: 118, durationMs: 260, gain: 0.008, intervalMs: 6000 };
}

type CueMode = "menu" | "active" | "paused" | "terminal";

export class AmbientCue {
  private context: AudioContext | null = null;
  private timer: number | null = null;
  private mode: CueMode = "menu";
  private count = 0;
  private lastCue: "stone-settle" | null = null;

  setMode(mode: CueMode): void {
    this.mode = mode;
    if (mode === "active") {
      void this.context?.resume();
      this.schedule(true);
      return;
    }
    this.clearTimer();
    if (mode === "paused") void this.context?.suspend();
    if (mode === "menu" || mode === "terminal") this.dispose();
  }

  diagnostics(): { readonly contextState: AudioContextState | "uncreated"; readonly mode: CueMode; readonly count: number; readonly lastCue: "stone-settle" | null } {
    return { contextState: this.context?.state ?? "uncreated", mode: this.mode, count: this.count, lastCue: this.lastCue };
  }

  dispose(): void {
    this.clearTimer();
    void this.context?.close();
    this.context = null;
  }

  private ensureContext(): void {
    if (this.context) return;
    const AudioContextConstructor = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (AudioContextConstructor) this.context = new AudioContextConstructor();
  }

  private schedule(initial = false): void {
    this.clearTimer();
    if (this.mode !== "active") return;
    const profile = ambientCueProfile();
    this.timer = window.setTimeout(() => {
      this.play();
      this.schedule();
    }, initial ? profile.intervalMs / 5 : profile.intervalMs);
  }

  private play(): void {
    if (this.mode !== "active") return;
    this.ensureContext();
    if (!this.context) return;
    const profile = ambientCueProfile();
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    const now = this.context.currentTime;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(profile.frequencyHz, now);
    oscillator.frequency.exponentialRampToValueAtTime(82, now + profile.durationMs / 1000);
    gain.gain.setValueAtTime(profile.gain, now);
    gain.gain.linearRampToValueAtTime(0, now + profile.durationMs / 1000);
    oscillator.connect(gain).connect(this.context.destination);
    oscillator.start(now);
    oscillator.stop(now + profile.durationMs / 1000);
    oscillator.addEventListener("ended", () => {
      oscillator.disconnect();
      gain.disconnect();
      void this.context?.close();
      this.context = null;
    });
    this.count += 1;
    this.lastCue = "stone-settle";
  }

  private clearTimer(): void {
    if (this.timer !== null) window.clearTimeout(this.timer);
    this.timer = null;
  }
}
