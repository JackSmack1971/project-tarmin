import { describe, expect, it } from "vitest";
import { itemById } from "../content/items";
import { applyCommand, createInitialState, executeCommand } from "./state";

const enterCombat = () => applyCommand(createInitialState(42), "moveForward");

describe("persistent dungeon world", () => {
  it("creates serializable monster instances with stable identity and location", () => {
    const state = createInitialState();
    expect(state.monsters).toHaveLength(7);
    expect(new Set(state.monsters.map((monster) => monster.definitionId))).toEqual(new Set(["ashbound-warden", "glass-mireling", "gloam-scavenger"]));
    expect(state.monsters.find((monster) => monster.id === "monster-warden-1")).toEqual({ id: "monster-warden-1", definitionId: "ashbound-warden", position: { x: 2, y: 1 }, health: 5, defeated: false });
    expect(JSON.parse(JSON.stringify(state)).monsters).toEqual(state.monsters);
  });

  it("restores surviving monster health and identity after retreat and re-entry", () => {
    const wounded = applyCommand(enterCombat(), "attackLeft");
    const retreated = applyCommand(wounded, "retreat");
    const reentered = executeCommand(retreated, "moveForward");

    expect(reentered.state.encounter).toMatchObject({ id: "monster-warden-1", health: 3, position: { x: 2, y: 1 } });
    expect(reentered.state.monsters[0]).toMatchObject({ id: "monster-warden-1", health: 3, defeated: false });
  });

  it("marks a defeated monster permanently and does not respawn it on revisit", () => {
    let state = enterCombat();
    state = applyCommand(applyCommand(state, "attackLeft"), "attackLeft");
    state = applyCommand(state, "attackLeft");
    expect(state.monsters[0]).toMatchObject({ id: "monster-warden-1", health: 0, defeated: true });

    state = applyCommand(state, "moveForward");
    state = applyCommand(state, "moveBackward");
    const revisited = executeCommand(state, "moveForward");
    expect(revisited.state.encounter).toBeNull();
    expect(revisited.events).toEqual([{ type: "moved", position: { x: 2, y: 1 } }]);
  });

  it("keeps loot at its dungeon location until pickup", () => {
    let state = enterCombat();
    state = applyCommand(applyCommand(state, "attackLeft"), "attackLeft");
    state = applyCommand(state, "attackLeft");
    const lootId = state.loot[0];
    expect(state.items.find((item) => item.id === lootId)).toMatchObject({ id: lootId, location: "world", position: { x: 1, y: 1 } });

    const pickedUp = applyCommand(state, "pickup");
    expect(pickedUp.loot).toEqual([]);
    expect(pickedUp.items.find((item) => item.id === lootId)).toMatchObject({ id: lootId, location: "ring" });
    expect(pickedUp.items.find((item) => item.id === lootId)?.position).toBeUndefined();
  });

  it("reaches the populated east branch and starts the stable Mireling encounter", () => {
    const commands = ["turnRight", "moveForward", "moveForward", "turnLeft", "moveForward", "moveForward", "moveForward", "moveForward"] as const;
    const result = commands.reduce(applyCommand, createInitialState(42));
    expect(result.player.position).toEqual({ x: 4, y: 3 });
    const encounter = executeCommand(result, "moveForward");
    expect(encounter.state.encounter).toMatchObject({ id: "monster-mireling-3", definitionId: "glass-mireling", name: "Glass Mireling", position: { x: 5, y: 3 } });
  });

  it("keeps populated-world loot deterministic for identical seeds and commands", () => {
    const commands = ["turnRight", "moveForward", "moveForward", "turnLeft", "moveForward", "moveForward", "moveForward", "moveForward", "attackLeft", "attackLeft", "attackLeft", "attackLeft"] as const;
    const play = (seed: number) => commands.reduce(applyCommand, createInitialState(seed));
    const first = play(7391);
    expect(first).toEqual(play(7391));
    expect(first.monsters).toHaveLength(7);
    expect(first.loot).toHaveLength(1);
    const loot = first.items.find((item) => item.id === first.loot[0]);
    expect(loot).toMatchObject({ location: "world", position: { x: 4, y: 3 } });
    expect(itemById(loot!.definitionId)).toBeDefined();
  });
});
