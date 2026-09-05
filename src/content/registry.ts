import { ITEM_DEFINITIONS, itemById, type ItemDefinition } from "./items";
import { MONSTER_DEFINITIONS, type MonsterDefinition } from "./monsters";
export interface LootEntry { readonly itemId: string; readonly weight: number; readonly quantity?: number; }
export const LOOT_TABLES: Readonly<Record<string, readonly LootEntry[]>> = { "warden-cache": [{ itemId: "moss-tonic", weight: 2 }, { itemId: "moonward-buckler", weight: 1 }], "mireling-cache": [{ itemId: "star-forged-seal", weight: 1 }, { itemId: "moss-tonic", weight: 2 }] };
export interface ContentRegistry { readonly items: readonly ItemDefinition[]; readonly monsters: readonly MonsterDefinition[]; readonly lootTables: Readonly<Record<string, readonly LootEntry[]>>; }
export const CONTENT: ContentRegistry = { items: ITEM_DEFINITIONS, monsters: MONSTER_DEFINITIONS, lootTables: LOOT_TABLES };
export function validateContent(registry: ContentRegistry = CONTENT): readonly string[] {
  const errors: string[] = []; const itemIds = new Set<string>();
  for (const item of registry.items) { if (itemIds.has(item.id)) errors.push(`duplicate item id: ${item.id}`); itemIds.add(item.id); if (item.attack !== undefined && item.attack < 0) errors.push(`invalid item attack: ${item.id}`); }
  const monsterIds = new Set<string>();
  for (const monster of registry.monsters) { if (monsterIds.has(monster.id)) errors.push(`duplicate monster id: ${monster.id}`); monsterIds.add(monster.id); if (monster.vitality <= 0 || monster.attack < 0 || monster.defense < 0) errors.push(`invalid monster range: ${monster.id}`); if (!registry.lootTables[monster.lootTableId]) errors.push(`missing loot table: ${monster.lootTableId}`); }
  for (const [tableId, table] of Object.entries(registry.lootTables)) for (const entry of table) { if (!registry.items.some((item) => item.id === entry.itemId) || !itemById(entry.itemId)) errors.push(`missing loot item: ${tableId}/${entry.itemId}`); if (!Number.isFinite(entry.weight) || entry.weight <= 0 || (entry.quantity !== undefined && entry.quantity <= 0)) errors.push(`malformed loot entry: ${tableId}/${entry.itemId}`); }
  return errors;
}
export function assertValidContent(registry: ContentRegistry = CONTENT): void { const errors = validateContent(registry); if (errors.length) throw new Error(errors.join("; ")); }
