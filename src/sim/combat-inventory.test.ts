import { describe, expect, it } from "vitest";
import { applyCommand, completeRun, createInitialState, executeCommand, restartRun, EXIT_POSITION } from "./state";

const encounter = () => applyCommand(createInitialState(42), "moveForward");

describe("deterministic combat and ring inventory", () => {
  it("uses a left-hand weapon and retaliates deterministically", () => {
    const result = executeCommand(encounter(), "attackLeft");
    expect(result.state.encounter?.health).toBeLessThan(5);
    expect(result.events.some((event) => event.type === "attackAttempt")).toBe(true);
    expect(result.state.playerHealth).toBe(9);
  });
  it("rejects an empty hand and accepts a right-hand equipped item", () => {
    const empty = executeCommand(encounter(), "attackRight");
    expect(empty.events.at(-1)).toEqual({ type: "commandIgnored", reason: "invalidAction" });
    const equipped = applyCommand(createInitialState(), "rotateInventoryNext");
    const withBuckler = { ...equipped, ring: [...equipped.ring, "item-loot-test"], selectedRingIndex: 2, items: [...equipped.items, { id: "item-loot-test", definitionId: "moonward-buckler", location: "ring" as const }], loot: [] };
    expect(applyCommand(withBuckler, "equipSelectedRight").rightHand).toBe("item-loot-test");
  });
  it("wraps ring selection and consumes a tonic with stable removal", () => {
    const initial = createInitialState();
    const previous = applyCommand(initial, "rotateInventoryPrevious");
    expect(previous.selectedRingIndex).toBe(1);
    const used = applyCommand(previous, "useSelected");
    expect(used.ring).toEqual(["item-ember-pike-1"]);
    expect(used.selectedRingIndex).toBe(0);
  });
  it("serializable encounter continuation preserves future outcomes", () => {
    const state = applyCommand(encounter(), "attackLeft");
    const restored = JSON.parse(JSON.stringify(state)) as typeof state;
    expect(applyCommand(state, "attackLeft")).toEqual(applyCommand(restored, "attackLeft"));
  });
  it("represents player defeat when retaliation reaches zero", () => {
    const state = { ...encounter(), playerHealth: 1, encounter: { ...encounter().encounter!, attack: 1 } };
    const result = executeCommand(state, "attackLeft");
    expect(result.state.playerHealth).toBe(0);
    expect(result.state.runStatus).toBe("defeated");
    expect(result.state.encounter).toBeNull();
    expect(result.events.some((event) => event.type === "playerDefeated")).toBe(true);
    expect(result.events.at(-1)).toEqual({ type: "runDefeated" });
  });
  it("blocks every later command after defeat without mutating the terminal run", () => {
    const state = { ...encounter(), playerHealth: 1, encounter: { ...encounter().encounter!, attack: 1 } };
    const defeated = executeCommand(state, "attackLeft").state;
    const attempted = executeCommand(defeated, "moveForward");
    expect(attempted.state).toBe(defeated);
    expect(attempted.events).toEqual([{ type: "commandIgnored", reason: "terminal" }]);
  });
  it("supports a terminal victory hook and blocks later commands", () => {
    const initial = createInitialState(42);
    const result = completeRun({ ...initial, player: { position: EXIT_POSITION, facing: "south" }, objective: { ...initial.objective, acquired: true } });
    expect(result.state.runStatus).toBe("victorious");
    expect(result.events).toEqual([{ type: "runVictorious" }]);
    expect(executeCommand(result.state, "turnLeft").state).toBe(result.state);
  });
  it("restarts cleanly for the same and a new seed", () => {
    expect(restartRun(42)).toEqual(createInitialState(42));
    expect(restartRun(43).seed).toBe(43);
    expect(restartRun(43)).not.toEqual(restartRun(42));
  });
});
