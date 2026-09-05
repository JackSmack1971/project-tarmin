import type { Command } from "../sim/state";

export interface KeyBindings {
  readonly moveForward: readonly string[];
  readonly moveBackward: readonly string[];
  readonly turnLeft: readonly string[];
  readonly turnRight: readonly string[];
  readonly inventoryPrevious: readonly string[];
  readonly inventoryNext: readonly string[];
  readonly pause: readonly string[];
}

export const DEFAULT_KEY_BINDINGS: KeyBindings = {
  moveForward: ["KeyW", "ArrowUp"], moveBackward: ["KeyS", "ArrowDown"],
  turnLeft: ["KeyA", "ArrowLeft"], turnRight: ["KeyD", "ArrowRight"],
  inventoryPrevious: ["KeyQ"], inventoryNext: ["KeyE"], pause: ["Escape"]
};

export type GameplayCommand = Extract<Command, "moveForward" | "moveBackward" | "turnLeft" | "turnRight">;

export function commandForKey(code: string, bindings: KeyBindings = DEFAULT_KEY_BINDINGS): GameplayCommand | null {
  for (const command of ["moveForward", "moveBackward", "turnLeft", "turnRight"] as const) {
    if (bindings[command].includes(code)) return command;
  }
  return null;
}

export function isPauseKey(code: string, bindings: KeyBindings = DEFAULT_KEY_BINDINGS): boolean {
  return bindings.pause.includes(code);
}
