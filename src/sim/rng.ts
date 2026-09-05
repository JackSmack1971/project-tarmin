export interface Rng { readonly state: number; }
export function nextRng(rng: Rng): Rng { let value = rng.state >>> 0; value ^= value << 13; value ^= value >>> 17; value ^= value << 5; return { state: value >>> 0 || 1 }; }
export function roll(rng: Rng, min: number, max: number): { readonly value: number; readonly rng: Rng } { const next = nextRng(rng); return { value: min + (next.state % (max - min + 1)), rng: next }; }
