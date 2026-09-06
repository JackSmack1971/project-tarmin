import type { GameState } from "../sim/state";

export const CHECKPOINT_SCHEMA_VERSION = 1;
export const CHECKPOINT_STORAGE_KEY = "project-tarmin.checkpoint";

interface CheckpointEnvelope {
  readonly schemaVersion: typeof CHECKPOINT_SCHEMA_VERSION;
  readonly state: GameState;
}

interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

function browserStorage(): StorageLike | null {
  try { return typeof window === "undefined" ? null : window.localStorage; } catch { return null; }
}

function isCheckpointState(value: unknown): value is GameState {
  if (!value || typeof value !== "object") return false;
  const state = value as Partial<GameState>;
  return state.rulesVersion === 3 && Number.isInteger(state.seed) && Number.isInteger(state.rngState)
    && state.runStatus === "playing" && Number.isInteger(state.floor) && Number.isInteger(state.turn)
    && Array.isArray(state.walls) && Array.isArray(state.doors) && Array.isArray(state.monsters)
    && Array.isArray(state.items) && Array.isArray(state.ring) && Array.isArray(state.loot)
    && typeof state.player === "object" && state.player !== null
    && typeof state.objective === "object" && state.objective !== null;
}

export function saveCheckpoint(state: GameState, storage: StorageLike | null = browserStorage()): boolean {
  if (!storage || state.runStatus !== "playing") return false;
  const envelope: CheckpointEnvelope = { schemaVersion: CHECKPOINT_SCHEMA_VERSION, state };
  try { storage.setItem(CHECKPOINT_STORAGE_KEY, JSON.stringify(envelope)); return true; } catch { return false; }
}

export function loadCheckpoint(storage: StorageLike | null = browserStorage()): GameState | null {
  if (!storage) return null;
  try {
    const raw = storage.getItem(CHECKPOINT_STORAGE_KEY);
    if (!raw) return null;
    const envelope: unknown = JSON.parse(raw);
    if (!envelope || typeof envelope !== "object") return null;
    const candidate = envelope as Partial<CheckpointEnvelope>;
    return candidate.schemaVersion === CHECKPOINT_SCHEMA_VERSION && isCheckpointState(candidate.state) ? candidate.state : null;
  } catch { return null; }
}

export function clearCheckpoint(storage: StorageLike | null = browserStorage()): void {
  try { storage?.removeItem(CHECKPOINT_STORAGE_KEY); } catch { /* unavailable storage is non-fatal */ }
}
