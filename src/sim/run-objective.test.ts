import { describe, expect, it } from "vitest";
import { applyCommand, completeRun, createInitialState, EXIT_POSITION, executeCommand } from "./state";

const atExit = (acquired: boolean) => {
  const state = createInitialState(42);
  return { ...state, player: { position: { x: 2, y: 3 }, facing: "south" as const }, objective: { ...state.objective, acquired } };
};

describe("one-floor run objective", () => {
  it("does not award victory at the exit before the seal is possessed", () => {
    const result = executeCommand(atExit(false), "moveForward");

    expect(result.state.runStatus).toBe("playing");
    expect(result.state.player.position).toEqual(EXIT_POSITION);
    expect(result.state.objective.complete).toBe(false);
    expect(result.events).toContainEqual({ type: "exitLocked", position: EXIT_POSITION });
  });

  it("awards authoritative victory at the exit after the seal is picked up", () => {
    const result = executeCommand(atExit(true), "moveForward");

    expect(result.state.runStatus).toBe("victorious");
    expect(result.state.objective).toMatchObject({ acquired: true, complete: true, exit: EXIT_POSITION });
    expect(result.events).toContainEqual({ type: "runVictorious" });
  });

  it("requires the exit and objective when completing directly", () => {
    const initial = createInitialState();
    expect(completeRun(initial).state).toBe(initial);
    expect(completeRun(initial).events).toContainEqual({ type: "exitLocked", position: initial.player.position });
  });

  it("awards the seal from the warden and records possession on pickup", () => {
    let state = applyCommand(createInitialState(42), "moveForward");
    for (const command of ["attackLeft", "attackLeft", "attackLeft"] as const) state = applyCommand(state, command);

    const sealId = state.loot[0];
    expect(state.items.find((item) => item.id === sealId)?.definitionId).toBe("star-forged-seal");
    state = applyCommand(state, "pickup");
    expect(state.objective.acquired).toBe(true);
    expect(state.items.find((item) => item.id === sealId)?.location).toBe("ring");
  });
});
