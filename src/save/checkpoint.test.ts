import { describe, expect, it } from "vitest";
import { createInitialState, executeCommand } from "../sim/state";
import { CHECKPOINT_STORAGE_KEY, clearCheckpoint, loadCheckpoint, saveCheckpoint } from "./checkpoint";

interface TestStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

function storage(): TestStorage {
  const values = new Map<string, string>();
  return { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => { values.set(key, value); }, removeItem: (key) => { values.delete(key); } };
}

describe("checkpoint persistence", () => {
  it("round-trips a playing canonical state", () => {
    const target = storage();
    const state = executeCommand(createInitialState(8128), "turnRight").state;
    expect(saveCheckpoint(state, target)).toBe(true);
    expect(loadCheckpoint(target)).toEqual(state);
  });

  it("rejects malformed, unsupported, and terminal checkpoints", () => {
    const target = storage();
    expect(saveCheckpoint({ ...createInitialState(), runStatus: "defeated" }, target)).toBe(false);
    target.setItem(CHECKPOINT_STORAGE_KEY, JSON.stringify({ schemaVersion: 99, state: createInitialState() }));
    expect(loadCheckpoint(target)).toBeNull();
    target.setItem(CHECKPOINT_STORAGE_KEY, "not json");
    expect(loadCheckpoint(target)).toBeNull();
  });

  it("clears a completed run's checkpoint", () => {
    const target = storage();
    saveCheckpoint(createInitialState(), target);
    clearCheckpoint(target);
    expect(loadCheckpoint(target)).toBeNull();
  });

  it("degrades safely when browser storage is unavailable", () => {
    const unavailable = {
      getItem: () => { throw new Error("blocked"); },
      setItem: () => { throw new Error("blocked"); },
      removeItem: () => { throw new Error("blocked"); }
    };
    expect(saveCheckpoint(createInitialState(), unavailable)).toBe(false);
    expect(loadCheckpoint(unavailable)).toBeNull();
    expect(() => clearCheckpoint(unavailable)).not.toThrow();
  });
});
