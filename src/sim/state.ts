import { assertValidContent, CONTENT, LOOT_TABLES } from "../content/registry";
import { itemById, type HandSlot, type ItemInstance } from "../content/items";
import { monsterById } from "../content/monsters";
import { roll } from "./rng";

export type Facing = "north" | "east" | "south" | "west";
export type RunStatus = "playing" | "defeated" | "victorious";
export type Command = "turnLeft" | "turnRight" | "moveForward" | "moveBackward" | "attack" | "attackLeft" | "attackRight" | "useSelected" | "equipSelectedLeft" | "equipSelectedRight" | "rotateInventoryPrevious" | "rotateInventoryNext" | "pickup" | "dropSelected" | "retreat";
export type GameEvent = { readonly type: "turned"; readonly facing: Facing } | { readonly type: "moved"; readonly position: Point } | { readonly type: "movementBlocked"; readonly position: Point } | { readonly type: "exitLocked"; readonly position: Point } | { readonly type: "encounterStarted"; readonly name: string; readonly monsterId: string } | { readonly type: "attackAttempt"; readonly hand: HandSlot } | { readonly type: "hit"; readonly target: string; readonly damage: number } | { readonly type: "monsterAttack"; readonly monsterId: string; readonly damage: number } | { readonly type: "monsterDefeated"; readonly monsterId: string } | { readonly type: "playerDefeated" } | { readonly type: "runDefeated" } | { readonly type: "runVictorious" } | { readonly type: "itemAcquired"; readonly itemId: string } | { readonly type: "itemUsed"; readonly itemId: string } | { readonly type: "equipmentChanged"; readonly hand: HandSlot; readonly itemId: string | null } | { readonly type: "inventoryRotated"; readonly selectedItemId: string | null } | { readonly type: "itemDropped"; readonly itemId: string } | { readonly type: "commandIgnored"; readonly reason: "terminal" | "encounter" | "invalidAction" | "inventoryFull" | "emptyRing" | "noLoot" };
export interface CommandResult { readonly state: GameState; readonly events: readonly GameEvent[]; }
export interface Point { readonly x: number; readonly y: number; }
export interface MonsterInstance { readonly id: string; readonly definitionId: string; readonly position: Point; readonly health: number; readonly defeated: boolean; }
export interface CombatState { readonly id: string; readonly definitionId: string; readonly name: string; readonly health: number; readonly maxHealth: number; readonly attack: number; readonly position: Point; }
export interface GameState { readonly rulesVersion: 3; readonly seed: number; readonly rngState: number; readonly runStatus: RunStatus; readonly floor: number; readonly turn: number; readonly player: { readonly position: Point; readonly facing: Facing }; readonly walls: readonly string[]; readonly doors: readonly DoorState[]; readonly playerHealth: number; readonly playerMaxHealth: number; readonly monsters: readonly MonsterInstance[]; readonly encounter: CombatState | null; readonly items: readonly ItemInstance[]; readonly leftHand: string | null; readonly rightHand: string | null; readonly ring: readonly string[]; readonly selectedRingIndex: number; readonly loot: readonly string[]; readonly objective: { readonly itemDefinitionId: "star-forged-seal"; readonly exit: Point; readonly acquired: boolean; readonly complete: boolean }; }
export interface DoorState { readonly position: Point; readonly open: boolean; }

const DELTAS: Record<Facing, Point> = { north: { x: 0, y: -1 }, east: { x: 1, y: 0 }, south: { x: 0, y: 1 }, west: { x: -1, y: 0 } };
const LEFT: Record<Facing, Facing> = { north: "west", west: "south", south: "east", east: "north" };
const RIGHT: Record<Facing, Facing> = { north: "east", east: "south", south: "west", west: "north" };
const key = (point: Point): string => `${point.x},${point.y}`;
const CAPACITY = 6;
export const EXIT_POSITION: Point = { x: 2, y: 4 };
export const OBJECTIVE_ITEM_ID = "star-forged-seal" as const;
const item = (id: string, definitionId: string, location: ItemInstance["location"], position?: Point): ItemInstance => ({ id, definitionId, location, ...(position ? { position } : {}) });

function encounterFromMonster(monster: MonsterInstance): CombatState {
  const definition = monsterById(monster.definitionId)!;
  return { id: monster.id, definitionId: definition.id, name: definition.name, health: monster.health, maxHealth: definition.vitality, attack: definition.attack, position: monster.position };
}

function monsterAt(state: GameState, position: Point): MonsterInstance | undefined {
  return state.monsters.find((monster) => !monster.defeated && key(monster.position) === key(position));
}

function updateMonster(state: GameState, id: string, patch: Partial<MonsterInstance>): readonly MonsterInstance[] {
  return state.monsters.map((monster) => monster.id === id ? { ...monster, ...patch } : monster);
}

export function createInitialState(seed = 7391): GameState {
  assertValidContent();
  const walls = ["0,0","1,0","2,0","3,0","4,0","5,0","6,0","0,1","6,1","0,2","2,2","3,2","6,2","0,3","4,3","6,3","0,4","6,4","0,5","1,5","2,5","4,5","5,5","6,5","0,6","1,6","2,6","3,6","4,6","5,6","6,6","3,1","3,3","3,4"];
  return { rulesVersion: 3, seed, rngState: seed >>> 0 || 1, runStatus: "playing", floor: 1, turn: 0, player: { position: { x: 1, y: 1 }, facing: "east" }, walls, doors: [], playerHealth: 10, playerMaxHealth: 10, monsters: [{ id: "monster-warden-1", definitionId: "ashbound-warden", position: { x: 2, y: 1 }, health: 5, defeated: false }], encounter: null, items: [item("item-ember-pike-1", "ember-pike", "ring"), item("item-moss-tonic-1", "moss-tonic", "ring")], leftHand: "item-ember-pike-1", rightHand: null, ring: ["item-ember-pike-1", "item-moss-tonic-1"], selectedRingIndex: 0, loot: [], objective: { itemDefinitionId: OBJECTIVE_ITEM_ID, exit: EXIT_POSITION, acquired: false, complete: false } };
}

export function restartRun(seed: number): GameState { return createInitialState(seed); }

export function completeRun(state: GameState): CommandResult {
  if (state.runStatus !== "playing") return { state, events: [] };
  if (!state.objective.acquired || key(state.player.position) !== key(state.objective.exit)) return { state, events: [{ type: "exitLocked", position: state.player.position }] };
  return { state: advance({ ...state, runStatus: "victorious", encounter: null, objective: { ...state.objective, complete: true } }, {}), events: [{ type: "runVictorious" }] };
}

const doorAt = (state: GameState, point: Point): DoorState | undefined => state.doors.find((door) => key(door.position) === key(point));
const selected = (state: GameState): string | null => state.ring[state.selectedRingIndex] ?? null;
const advance = (state: GameState, patch: Partial<GameState>): GameState => ({ ...state, ...patch, turn: state.turn + 1 });

function combat(state: GameState, hand: HandSlot, events: GameEvent[]): GameState {
  const target = state.encounter;
  const itemId = hand === "left" ? state.leftHand : state.rightHand;
  const definition = itemById(state.items.find((value) => value.id === itemId)?.definitionId ?? "");
  events.push({ type: "attackAttempt", hand });
  if (!target || !definition?.attack) { events.push({ type: "commandIgnored", reason: "invalidAction" }); return state; }
  let rng = { state: state.rngState };
  const accuracy = roll(rng, 1, 100); rng = accuracy.rng;
  if (accuracy.value <= 5) return advance({ ...state, rngState: rng.state }, {});
  const damage = roll(rng, definition.attack, definition.attack + 1); rng = damage.rng;
  const health = target.health - damage.value;
  events.push({ type: "hit", target: target.id, damage: damage.value });
  if (health <= 0) {
    events.push({ type: "monsterDefeated", monsterId: target.id });
    const lootRoll = roll(rng, 1, 3); rng = lootRoll.rng;
    const table = LOOT_TABLES[monsterById(target.definitionId)!.lootTableId];
    const lootEntry = table[lootRoll.value % table.length];
    const defeated = updateMonster(state, target.id, { health: 0, defeated: true });
    if (lootEntry) {
      const lootId = `item-loot-${state.turn + 1}`;
      events.push({ type: "itemAcquired", itemId: lootId });
      return advance({ ...state, rngState: rng.state, monsters: defeated, encounter: null, loot: [...state.loot, lootId], items: [...state.items, item(lootId, lootEntry.itemId, "world", state.player.position)] }, {});
    }
    return advance({ ...state, rngState: rng.state, monsters: defeated, encounter: null }, {});
  }
  const retaliation = roll(rng, 0, Math.max(0, target.attack - (hand === "left" ? itemById(state.items.find((value) => value.id === state.rightHand)?.definitionId ?? "")?.defense ?? 0 : itemById(state.items.find((value) => value.id === state.leftHand)?.definitionId ?? "")?.defense ?? 0))); rng = retaliation.rng;
  const playerHealth = Math.max(0, state.playerHealth - retaliation.value);
  if (retaliation.value) events.push({ type: "monsterAttack", monsterId: target.id, damage: retaliation.value });
  if (!playerHealth) {
    events.push({ type: "playerDefeated" }, { type: "runDefeated" });
    return advance({ ...state, rngState: rng.state, monsters: updateMonster(state, target.id, { health }), playerHealth, encounter: null, runStatus: "defeated" }, {});
  }
  return advance({ ...state, rngState: rng.state, monsters: updateMonster(state, target.id, { health }), playerHealth, encounter: { ...target, health } }, {});
}

export function executeCommand(state: GameState, command: Command): CommandResult {
  if (state.runStatus !== "playing") return { state, events: [{ type: "commandIgnored", reason: "terminal" }] };
  const events: GameEvent[] = [];
  if (state.encounter) {
    if (command === "retreat") return { state: advance(state, { encounter: null }), events };
    if (command === "attack" || command === "attackLeft" || command === "attackRight") return { state: combat(state, command === "attackRight" ? "right" : "left", events), events };
    return { state, events: [{ type: "commandIgnored", reason: "encounter" }] };
  }
  if (command === "rotateInventoryNext" || command === "rotateInventoryPrevious") {
    if (!state.ring.length) return { state, events: [{ type: "commandIgnored", reason: "emptyRing" }] };
    const delta = command === "rotateInventoryNext" ? 1 : -1;
    const index = (state.selectedRingIndex + delta + state.ring.length) % state.ring.length;
    return { state: advance(state, { selectedRingIndex: index }), events: [{ type: "inventoryRotated", selectedItemId: state.ring[index] }] };
  }
  if (command === "equipSelectedLeft" || command === "equipSelectedRight") {
    const itemId = selected(state); const hand: HandSlot = command === "equipSelectedLeft" ? "left" : "right";
    const definition = itemById(state.items.find((value) => value.id === itemId)?.definitionId ?? "");
    if (!itemId || !definition?.handUsage) return { state, events: [{ type: "commandIgnored", reason: "invalidAction" }] };
    const slot = hand === "left" ? "leftHand" : "rightHand";
    return { state: advance({ ...state, [slot]: itemId }, {}), events: [{ type: "equipmentChanged", hand, itemId }] };
  }
  if (command === "useSelected") {
    const itemId = selected(state); const definition = itemById(state.items.find((value) => value.id === itemId)?.definitionId ?? "");
    if (!itemId || !definition?.healing) return { state, events: [{ type: "commandIgnored", reason: "invalidAction" }] };
    const ring = state.ring.filter((id) => id !== itemId);
    return { state: advance({ ...state, playerHealth: Math.min(state.playerMaxHealth, state.playerHealth + definition.healing), ring, selectedRingIndex: ring.length ? state.selectedRingIndex % ring.length : 0, items: state.items.map((value) => value.id === itemId ? { ...value, location: "consumed" } : value) }, {}), events: [{ type: "itemUsed", itemId }] };
  }
  if (command === "pickup") {
    const itemId = state.loot.find((id) => state.items.find((itemValue) => itemValue.id === id)?.position && key(state.items.find((itemValue) => itemValue.id === id)!.position!) === key(state.player.position));
    if (!itemId) return { state, events: [{ type: "commandIgnored", reason: "noLoot" }] };
    if (state.ring.length >= CAPACITY) return { state, events: [{ type: "commandIgnored", reason: "inventoryFull" }] };
    const pickedItem = state.items.find((value) => value.id === itemId);
    return { state: advance({ ...state, loot: state.loot.filter((id) => id !== itemId), ring: [...state.ring, itemId], items: state.items.map((value): ItemInstance => value.id === itemId ? { ...value, location: "ring", position: undefined } : value), objective: pickedItem?.definitionId === OBJECTIVE_ITEM_ID ? { ...state.objective, acquired: true } : state.objective }, {}), events: [{ type: "itemAcquired", itemId }] };
  }
  if (command === "dropSelected") {
    const itemId = selected(state);
    if (!itemId || itemId === state.leftHand || itemId === state.rightHand) return { state, events: [{ type: "commandIgnored", reason: "invalidAction" }] };
    const ring = state.ring.filter((id) => id !== itemId);
    return { state: advance({ ...state, ring, selectedRingIndex: ring.length ? state.selectedRingIndex % ring.length : 0, loot: [...state.loot, itemId], items: state.items.map((value): ItemInstance => value.id === itemId ? { ...value, location: "world", position: state.player.position } : value) }, {}), events: [{ type: "itemDropped", itemId }] };
  }
  const facing = command === "turnLeft" ? LEFT[state.player.facing] : command === "turnRight" ? RIGHT[state.player.facing] : state.player.facing;
  let position = state.player.position;
  if (command === "moveForward" || command === "moveBackward") {
    const forward = DELTAS[facing]; const delta = command === "moveForward" ? forward : { x: -forward.x, y: -forward.y };
    const next = { x: position.x + delta.x, y: position.y + delta.y }; const door = doorAt(state, next);
    if (!state.walls.includes(key(next)) && (!door || door.open)) {
      const monster = command === "moveForward" ? monsterAt(state, next) : undefined;
      if (monster) { const encounter = encounterFromMonster(monster); return { state: advance(state, { encounter }), events: [{ type: "encounterStarted", name: encounter.name, monsterId: monster.id }] }; }
      position = next; events.push({ type: "moved", position });
    } else events.push({ type: "movementBlocked", position: next });
  }
  if (command === "turnLeft" || command === "turnRight") events.push({ type: "turned", facing });
  const movedState = advance(state, { player: { position, facing } });
  if ((command === "moveForward" || command === "moveBackward") && key(position) === key(state.objective.exit)) {
    const completion = completeRun(movedState);
    if (completion.events[0]?.type === "runVictorious") return { state: completion.state, events: [...events, ...completion.events] };
    events.push(...completion.events);
  }
  return { state: movedState, events };
}

export function applyCommand(state: GameState, command: Command): GameState { return executeCommand(state, command).state; }
export function visibleCells(state: GameState): readonly { distance: number; point: Point; blocked: boolean }[] {
  const delta = DELTAS[state.player.facing];
  return [1, 2, 3, 4].map((distance) => { const point = { x: state.player.position.x + delta.x * distance, y: state.player.position.y + delta.y * distance }; return { distance, point, blocked: state.walls.includes(key(point)) || doorAt(state, point)?.open === false }; });
}
export type VisibleCellKind = "passage" | "wall" | "closed-door" | "open-door";
export function visibleCellKind(state: GameState, point: Point): VisibleCellKind { const door = doorAt(state, point); if (door) return door.open ? "open-door" : "closed-door"; return state.walls.includes(key(point)) ? "wall" : "passage"; }
export { CAPACITY, CONTENT };
