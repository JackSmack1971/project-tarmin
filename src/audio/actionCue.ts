export type ActionCueKind = "attack" | "use" | "encounter" | "pickup";

export interface ActionCueProfile {
  readonly frequencyHz: number;
  readonly durationMs: number;
  readonly gain: number;
}

export function actionCueProfile(kind: ActionCueKind): ActionCueProfile {
  if (kind === "attack") return { frequencyHz: 220, durationMs: 80, gain: 0.035 };
  if (kind === "use") return { frequencyHz: 330, durationMs: 110, gain: 0.028 };
  if (kind === "encounter") return { frequencyHz: 150, durationMs: 180, gain: 0.04 };
  return { frequencyHz: 440, durationMs: 70, gain: 0.032 };
}

type CueMode = "menu" | "active" | "paused" | "terminal";

export class ActionCue {
  private context: AudioContext | null = null;
  private mode: CueMode = "menu";
  private count = 0;
  private lastCue: ActionCueKind | null = null;

  setMode(mode: CueMode): void {
    this.mode = mode;
    if (mode === "active") void this.context?.resume();
    if (mode === "paused") void this.context?.suspend();
    if (mode === "menu" || mode === "terminal") this.dispose();
  }

  play(kind: ActionCueKind): void {
    if (this.mode !== "active") return;
    const profile = actionCueProfile(kind);
    const AudioContextConstructor = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!this.context && AudioContextConstructor) this.context = new AudioContextConstructor();
    if (!this.context) return;
    void this.context.resume();
    const oscillator = this.context.createOscillator();
    const gain = this.context.createGain();
    const now = this.context.currentTime;
    oscillator.type = kind === "attack" || kind === "encounter" ? "square" : "triangle";
    oscillator.frequency.setValueAtTime(profile.frequencyHz, now);
    gain.gain.setValueAtTime(profile.gain, now);
    gain.gain.linearRampToValueAtTime(0, now + profile.durationMs / 1000);
    oscillator.connect(gain).connect(this.context.destination);
    oscillator.start(now);
    oscillator.stop(now + profile.durationMs / 1000);
    oscillator.addEventListener("ended", () => { oscillator.disconnect(); gain.disconnect(); });
    this.count += 1;
    this.lastCue = kind;
  }

  diagnostics(): { readonly contextState: AudioContextState | "uncreated"; readonly mode: CueMode; readonly count: number; readonly lastCue: ActionCueKind | null } {
    return { contextState: this.context?.state ?? "uncreated", mode: this.mode, count: this.count, lastCue: this.lastCue };
  }

  dispose(): void {
    void this.context?.close();
    this.context = null;
  }
}
