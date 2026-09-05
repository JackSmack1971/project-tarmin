import { describe, expect, it } from "vitest";
import { applyCommand, createInitialState, executeCommand } from "./state";

const enterCombat = () => applyCommand(createInitialState(42), "moveForward");

describe("persistent dungeon world", () => {
  it("creates serializable monster instances with stable identity and location", () => {
    const state = createInitialState();
    expect(state.monsters).toEqual([{ id: "monster-warden-1", definitionId: "ashbound-warden", position: { x: 2, y: 1 }, health: 5, defeated: false }]);
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
});
