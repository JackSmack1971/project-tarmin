import { commandForKey, isPauseKey, type GameplayCommand, type KeyBindings, DEFAULT_KEY_BINDINGS } from "./bindings";

export type InputMode = "menu" | "active" | "transitioning" | "paused";
export interface KeyboardLike { addEventListener(type: "keydown", listener: (event: KeyboardEvent) => void): void; removeEventListener(type: "keydown", listener: (event: KeyboardEvent) => void): void; }
export interface InputControllerOptions { readonly target: KeyboardLike; readonly bindings?: KeyBindings; readonly emit: (command: GameplayCommand) => void; readonly togglePause: () => void; readonly getMode: () => InputMode; }

const FORM_TAGS = new Set(["INPUT", "TEXTAREA", "SELECT"]);

export class InputController {
  private readonly target: KeyboardLike;
  private readonly bindings: KeyBindings;
  private readonly emit: (command: GameplayCommand) => void;
  private readonly togglePause: () => void;
  private readonly getMode: () => InputMode;
  private readonly onKeyDownBound = (event: KeyboardEvent): void => this.onKeyDown(event);

  constructor(options: InputControllerOptions) {
    this.target = options.target; this.bindings = options.bindings ?? DEFAULT_KEY_BINDINGS;
    this.emit = options.emit; this.togglePause = options.togglePause; this.getMode = options.getMode;
  }
  attach(): void { this.target.addEventListener("keydown", this.onKeyDownBound); }
  detach(): void { this.target.removeEventListener("keydown", this.onKeyDownBound); }
  private onKeyDown(event: KeyboardEvent): void {
    const target = event.target as HTMLElement | null;
    if (target && FORM_TAGS.has(target.tagName)) return;
    if (isPauseKey(event.code, this.bindings)) { event.preventDefault(); this.togglePause(); return; }
    if (this.getMode() !== "active") return;
    if (event.repeat) { event.preventDefault(); return; }
    const command = commandForKey(event.code, this.bindings);
    if (!command) return;
    event.preventDefault();
    this.emit(command);
  }
}
