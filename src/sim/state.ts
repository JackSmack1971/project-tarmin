export type Facing = "north" | "east" | "south" | "west";
export type Command = "turnLeft" | "turnRight" | "moveForward" | "moveBackward" | "attack" | "retreat";
export type GameEvent =
  | { readonly type: "turned"; readonly facing: Facing }
  | { readonly type: "moved"; readonly position: Point }
  | { readonly type: "movementBlocked"; readonly position: Point }
  | { readonly type: "encounterStarted"; readonly name: string }
  | { readonly type: "commandIgnored"; readonly reason: "encounter" };

export interface CommandResult { readonly state: GameState; readonly events: readonly GameEvent[]; }

export interface Point { readonly x: number; readonly y: number; }

export interface GameState {
  readonly rulesVersion: 1;
  readonly seed: number;
  readonly floor: number;
  readonly turn: number;
  readonly player: { readonly position: Point; readonly facing: Facing };
  readonly walls: readonly string[];
  readonly doors: readonly DoorState[];
  readonly playerHealth: number;
  readonly encounter: CombatState | null;
}

export interface DoorState { readonly position: Point; readonly open: boolean; }

export interface CombatState {
  readonly name: string;
  readonly health: number;
  readonly maxHealth: number;
  readonly attack: number;
  readonly position: Point;
}

const DELTAS: Record<Facing, Point> = {
  north: { x: 0, y: -1 }, east: { x: 1, y: 0 }, south: { x: 0, y: 1 }, west: { x: -1, y: 0 }
};
const ROTATE_LEFT: Record<Facing, Facing> = { north: "west", west: "south", south: "east", east: "north" };
const ROTATE_RIGHT: Record<Facing, Facing> = { north: "east", east: "south", south: "west", west: "north" };
const key = (point: Point): string => `${point.x},${point.y}`;

export function createInitialState(seed = 7391): GameState {
  const walls = [
    "0,0", "1,0", "2,0", "3,0", "4,0", "5,0", "6,0",
    "0,1", "6,1", "0,2", "2,2", "3,2", "6,2", "0,3", "4,3", "6,3",
    "0,4", "6,4", "0,5", "1,5", "2,5", "4,5", "5,5", "6,5", "0,6", "1,6", "2,6", "3,6", "4,6", "5,6", "6,6",
    "3,1", "3,3", "3,4"
  ];
  return { rulesVersion: 1, seed, floor: 1, turn: 0, player: { position: { x: 1, y: 1 }, facing: "east" }, walls, doors: [], playerHealth: 10, encounter: null };
}

function doorAt(state: GameState, point: Point): DoorState | undefined {
  return state.doors.find((door) => key(door.position) === key(point));
}

export function executeCommand(state: GameState, command: Command): CommandResult {
  const events: GameEvent[] = [];
  if (state.encounter) {
    if (command === "retreat") return { state: { ...state, turn: state.turn + 1, encounter: null }, events };
    if (command !== "attack") return { state, events: [{ type: "commandIgnored", reason: "encounter" }] };
    const health = state.encounter.health - 2;
    if (health <= 0) return { state: { ...state, turn: state.turn + 1, encounter: null }, events };
    return { state: { ...state, turn: state.turn + 1, playerHealth: state.playerHealth - state.encounter.attack, encounter: { ...state.encounter, health } }, events };
  }
  const facing = command === "turnLeft" ? ROTATE_LEFT[state.player.facing]
    : command === "turnRight" ? ROTATE_RIGHT[state.player.facing] : state.player.facing;
  let position = state.player.position;
  if (command === "moveForward" || command === "moveBackward") {
    const forward = DELTAS[facing];
    const delta = command === "moveForward" ? forward : { x: -forward.x, y: -forward.y };
    const next = { x: position.x + delta.x, y: position.y + delta.y };
    const door = doorAt(state, next);
    if (!state.walls.includes(key(next)) && (!door || door.open)) {
      if (command === "moveForward" && next.x === 2 && next.y === 1) return { state: { ...state, turn: state.turn + 1, encounter: { name: "Ashbound Warden", health: 5, maxHealth: 5, attack: 1, position: next } }, events: [{ type: "encounterStarted", name: "Ashbound Warden" }] };
      position = next;
      events.push({ type: "moved", position });
    } else {
      events.push({ type: "movementBlocked", position: next });
    }
  }
  if (command === "turnLeft" || command === "turnRight") events.push({ type: "turned", facing });
  return { state: { ...state, turn: state.turn + 1, player: { position, facing } }, events };
}

export function applyCommand(state: GameState, command: Command): GameState {
  return executeCommand(state, command).state;
}

export function visibleCells(state: GameState): readonly { distance: number; point: Point; blocked: boolean }[] {
  const delta = DELTAS[state.player.facing];
  return [1, 2, 3, 4].map((distance) => {
    const point = { x: state.player.position.x + delta.x * distance, y: state.player.position.y + delta.y * distance };
    return { distance, point, blocked: state.walls.includes(key(point)) || doorAt(state, point)?.open === false };
  });
}

export type VisibleCellKind = "passage" | "wall" | "closed-door" | "open-door";

export function visibleCellKind(state: GameState, point: Point): VisibleCellKind {
  const door = doorAt(state, point);
  if (door) return door.open ? "open-door" : "closed-door";
  return state.walls.includes(key(point)) ? "wall" : "passage";
}
