import type { Command } from "../sim/state";

export interface KeyBindings {
  readonly moveForward: readonly string[];
  readonly moveBackward: readonly string[];
  readonly turnLeft: readonly string[];
  readonly turnRight: readonly string[];
  readonly inventoryPrevious: readonly string[];
  readonly inventoryNext: readonly string[];
  readonly pause: readonly string[];
  readonly attackLeft: readonly string[];
  readonly attackRight: readonly string[];
  readonly useSelected: readonly string[];
  readonly equipLeft: readonly string[];
  readonly equipRight: readonly string[];
  readonly pickup: readonly string[];
  readonly drop: readonly string[];
}

export const DEFAULT_KEY_BINDINGS: KeyBindings = {
  moveForward: ["KeyW", "ArrowUp"], moveBackward: ["KeyS", "ArrowDown"],
  turnLeft: ["KeyA", "ArrowLeft"], turnRight: ["KeyD", "ArrowRight"],
  inventoryPrevious: ["KeyQ"], inventoryNext: ["KeyE"], pause: ["Escape"], attackLeft: ["Space"], attackRight: ["KeyF"], useSelected: ["KeyR"], equipLeft: ["KeyZ"], equipRight: ["KeyX"], pickup: ["KeyP"], drop: ["Backspace"]
};

export type GameplayCommand = Exclude<Command, "retreat">;

export function commandForKey(code: string, bindings: KeyBindings = DEFAULT_KEY_BINDINGS): GameplayCommand | null {
  for (const command of ["moveForward", "moveBackward", "turnLeft", "turnRight", "attackLeft", "attackRight", "useSelected", "equipLeft", "equipRight"] as const) {
    if (bindings[command].includes(code)) {
      if (command === "equipLeft") return "equipSelectedLeft";
      if (command === "equipRight") return "equipSelectedRight";
      return command;
    }
  }
  if (bindings.inventoryPrevious.includes(code)) return "rotateInventoryPrevious";
  if (bindings.inventoryNext.includes(code)) return "rotateInventoryNext";
  if (bindings.pickup.includes(code)) return "pickup";
  if (bindings.drop.includes(code)) return "dropSelected";
  return null;
}

export function isPauseKey(code: string, bindings: KeyBindings = DEFAULT_KEY_BINDINGS): boolean {
  return bindings.pause.includes(code);
}
