export function normalizeSeed(value: string | number): number {
  const text = String(value).trim();
  if (/^[+-]?\d+$/.test(text)) return (Number.parseInt(text, 10) >>> 0) || 1;
  let hash = 2166136261;
  for (const character of text) { hash ^= character.charCodeAt(0); hash = Math.imul(hash, 16777619); }
  return (hash >>> 0) || 1;
}

export function createBrowserSeed(): number {
  const values = new Uint32Array(1);
  crypto.getRandomValues(values);
  return normalizeSeed(values[0]);
}
