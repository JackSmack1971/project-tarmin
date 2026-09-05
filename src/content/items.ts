export type ItemCategory = "weapon" | "defense" | "consumable" | "treasure";
export type HandSlot = "left" | "right";
export interface ItemDefinition { readonly id: string; readonly name: string; readonly category: ItemCategory; readonly handUsage?: "either" | "both"; readonly attack?: number; readonly defense?: number; readonly healing?: number; readonly presentationId: string; }
export interface ItemInstance { readonly id: string; readonly definitionId: string; readonly location: "ring" | "left" | "right" | "world" | "consumed"; readonly position?: { readonly x: number; readonly y: number }; }
export const ITEM_DEFINITIONS: readonly ItemDefinition[] = [
  { id: "ember-pike", name: "Ember Pike", category: "weapon", handUsage: "either", attack: 2, presentationId: "pike" },
  { id: "rimeglass-knife", name: "Rimeglass Knife", category: "weapon", handUsage: "either", attack: 1, presentationId: "knife" },
  { id: "moonward-buckler", name: "Moonward Buckler", category: "defense", handUsage: "either", defense: 1, presentationId: "buckler" },
  { id: "ashen-mail", name: "Ashen Mail", category: "defense", handUsage: "either", defense: 2, presentationId: "mail" },
  { id: "moss-tonic", name: "Moss Tonic", category: "consumable", healing: 3, presentationId: "tonic" },
  { id: "star-forged-seal", name: "Star-Forged Seal", category: "treasure", presentationId: "seal" }
];
export const itemById = (id: string): ItemDefinition | undefined => ITEM_DEFINITIONS.find((item) => item.id === id);
