export interface MonsterDefinition { readonly id: string; readonly name: string; readonly vitality: number; readonly attack: number; readonly defense: number; readonly lootTableId: string; readonly presentationId: string; }
export const MONSTER_DEFINITIONS: readonly MonsterDefinition[] = [
  { id: "ashbound-warden", name: "Ashbound Warden", vitality: 5, attack: 1, defense: 0, lootTableId: "warden-cache", presentationId: "warden" },
  { id: "glass-mireling", name: "Glass Mireling", vitality: 4, attack: 2, defense: 0, lootTableId: "mireling-cache", presentationId: "mireling" },
  { id: "gloam-scavenger", name: "Gloam Scavenger", vitality: 3, attack: 1, defense: 0, lootTableId: "scavenger-cache", presentationId: "scavenger" }
];
export const monsterById = (id: string): MonsterDefinition | undefined => MONSTER_DEFINITIONS.find((monster) => monster.id === id);
