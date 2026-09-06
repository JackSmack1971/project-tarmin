export interface HealthCueProfile {
  readonly enabled: boolean;
  readonly intervalMs: number;
  readonly frequencyHz: number;
  readonly gain: number;
}

export function healthCueProfile(health: number, maxHealth: number): HealthCueProfile {
  const ratio = maxHealth > 0 ? Math.max(0, Math.min(1, health / maxHealth)) : 0;
  if (ratio >= 1) return { enabled: false, intervalMs: 0, frequencyHz: 0, gain: 0 };
  return {
    enabled: true,
    intervalMs: Math.round(650 + ratio * 650),
    frequencyHz: Math.round(150 + (1 - ratio) * 90),
    gain: 0.018 + (1 - ratio) * 0.022
  };
}

type CueMode = "menu" | "active" | "paused" | "terminal";

export class HealthCue {
  private context: AudioContext | null = null;
  private oscillator: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;
  private pulseTimer: number | null = null;
  private profile: HealthCueProfile = healthCueProfile(1, 1);
  private mode: CueMode = "menu";

  setMode(mode: CueMode): void {
    this.mode = mode;
    if (mode === "active") {
      void this.context?.resume();
      this.syncPulse();
    } else {
      this.stopPulse();
      if (mode === "paused") void this.context?.suspend();
      if (mode === "menu" || mode === "terminal") this.dispose();
    }
  }

  update(health: number, maxHealth: number): void {
    this.profile = healthCueProfile(health, maxHealth);
    this.syncPulse();
  }

  diagnostics(): { readonly contextState: AudioContextState | "uncreated"; readonly profile: HealthCueProfile; readonly mode: CueMode } {
    return { contextState: this.context?.state ?? "uncreated", profile: this.profile, mode: this.mode };
  }

  dispose(): void {
    this.stopPulse();
    this.oscillator?.stop();
    this.oscillator?.disconnect();
    this.gainNode?.disconnect();
    this.oscillator = null;
    this.gainNode = null;
    void this.context?.close();
    this.context = null;
  }

  private syncPulse(): void {
    if (this.mode !== "active" || !this.profile.enabled) {
      this.stopPulse();
      return;
    }
    this.ensureAudioGraph();
    if (!this.context || !this.gainNode || !this.oscillator) return;
    this.oscillator.frequency.setValueAtTime(this.profile.frequencyHz, this.context.currentTime);
    this.stopPulse();
    this.pulse();
    this.pulseTimer = window.setInterval(() => this.pulse(), this.profile.intervalMs);
  }

  private ensureAudioGraph(): void {
    if (this.context) return;
    const AudioContextConstructor = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextConstructor) return;
    this.context = new AudioContextConstructor();
    this.oscillator = this.context.createOscillator();
    this.gainNode = this.context.createGain();
    this.oscillator.type = "sine";
    this.gainNode.gain.value = 0;
    this.oscillator.connect(this.gainNode).connect(this.context.destination);
    this.oscillator.start();
  }

  private pulse(): void {
    if (!this.context || !this.gainNode) return;
    const now = this.context.currentTime;
    this.gainNode.gain.cancelScheduledValues(now);
    this.gainNode.gain.setValueAtTime(0, now);
    this.gainNode.gain.linearRampToValueAtTime(this.profile.gain, now + 0.02);
    this.gainNode.gain.linearRampToValueAtTime(0, now + 0.14);
  }

  private stopPulse(): void {
    if (this.pulseTimer !== null) window.clearInterval(this.pulseTimer);
    this.pulseTimer = null;
    if (this.context && this.gainNode) this.gainNode.gain.setValueAtTime(0, this.context.currentTime);
  }
}
