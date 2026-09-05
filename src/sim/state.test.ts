import { describe, expect, it } from "vitest";
import { applyCommand, createInitialState, executeCommand, visibleCells } from "./state";

describe("authoritative exploration", () => {
  it("turns and moves only in discrete commands", () => {
    const initial = createInitialState(42);
    const result = applyCommand(applyCommand(initial, "turnRight"), "moveForward");
    expect(result.player.facing).toBe("south");
    expect(result.player.position).toEqual({ x: 1, y: 2 });
    expect(result.turn).toBe(2);
  });

  it("returns to the original facing after four turns", () => {
    const initial = createInitialState();
    const result = ["turnRight", "turnRight", "turnRight", "turnRight"] as const;
    expect(result.reduce(applyCommand, initial).player.facing).toBe(initial.player.facing);
  });

  it("does not move through a wall", () => {
    const initial = createInitialState(42);
    const result = applyCommand(applyCommand(initial, "turnLeft"), "moveForward");
    expect(result.player.position).toEqual({ x: 1, y: 1 });
  });

  it("reports blocked movement without changing coordinates", () => {
    const initial = applyCommand(createInitialState(), "turnLeft");
    const result = executeCommand(initial, "moveForward");
    expect(result.state.player.position).toEqual(initial.player.position);
    expect(result.events).toEqual([{ type: "movementBlocked", position: { x: 1, y: 0 } }]);
  });

  it("moves backward as a discrete authoritative command", () => {
    const initial = createInitialState();
    const south = applyCommand(applyCommand(initial, "turnRight"), "moveForward");
    expect(applyCommand(south, "moveBackward").player.position).toEqual({ x: 1, y: 1 });
  });

  it("keeps identical seeds and commands deterministic", () => {
    const commands = ["moveForward", "turnRight", "moveForward", "turnLeft"] as const;
    const play = (seed: number) => commands.reduce(applyCommand, createInitialState(seed));
    expect(play(123)).toEqual(play(123));
    expect(play(123)).not.toEqual(play(124));
  });

  it("exposes forward cells for the presentation layer", () => {
    expect(visibleCells(createInitialState()).map((cell) => cell.blocked)).toEqual([false, true, false, false]);
  });

  it("starts combat when moving onto the guarded tile", () => {
    const result = applyCommand(createInitialState(42), "moveForward");
    expect(result.player.position).toEqual({ x: 1, y: 1 });
    expect(result.encounter).toMatchObject({ name: "Ashbound Warden", health: 5, maxHealth: 5 });
  });

  it("resolves deterministic attacks and defeats the guard", () => {
    const fighting = applyCommand(createInitialState(42), "moveForward");
    const wounded = applyCommand(fighting, "attack");
    expect(wounded.encounter?.health).toBe(3);
    expect(wounded.playerHealth).toBe(9);
    const defeated = applyCommand(applyCommand(wounded, "attack"), "attack");
    expect(defeated.encounter).toBeNull();
    expect(defeated.turn).toBe(4);
  });

  it("retreats from combat without changing position", () => {
    const fighting = applyCommand(createInitialState(), "moveForward");
    const result = applyCommand(fighting, "retreat");
    expect(result.encounter).toBeNull();
    expect(result.player.position).toEqual({ x: 1, y: 1 });
  });
});
