import type { GameState, Point } from "../../sim/state";
import { PORTAL_FRAMES, type PortalQuad } from "../../game/portalProjection";

export type EntityKind = "monster" | "item" | "treasure" | "feature";

export interface EntitySource {
  readonly id: string;
  readonly definitionId: string;
  readonly presentationId: string;
  readonly kind: EntityKind;
  readonly position: Point;
}

export interface EntityBillboard {
  readonly id: string;
  readonly definitionId: string;
  readonly presentationId: string;
  readonly kind: EntityKind;
  readonly depth: number;
  readonly position: Point;
  readonly quad: PortalQuad;
  readonly lightLevel: number;
}

const DELTAS = { north: { x: 0, y: -1 }, east: { x: 1, y: 0 }, south: { x: 0, y: 1 }, west: { x: -1, y: 0 } } as const;
const DEPTH_SCALE = [0, 1, 0.58, 0.34, 0.2] as const;
const DEPTH_LIGHT = [0, 1, 0.68, 0.36, 0.14] as const;
const key = (point: Point): string => `${point.x},${point.y}`;

function entityDepth(state: GameState, position: Point): { depth: number; lateral: number } | null {
  const forward = DELTAS[state.player.facing];
  const dx = position.x - state.player.position.x;
  const dy = position.y - state.player.position.y;
  const depth = dx * forward.x + dy * forward.y;
  const lateral = dx * -forward.y + dy * forward.x;
  if (!Number.isInteger(depth) || depth < 1 || depth >= PORTAL_FRAMES.length || Math.abs(lateral) > depth) return null;
  return { depth, lateral };
}

function nearestOpaqueDepth(state: GameState): number | null {
  const forward = DELTAS[state.player.facing];
  for (let depth = 1; depth < PORTAL_FRAMES.length; depth += 1) {
    const point = { x: state.player.position.x + forward.x * depth, y: state.player.position.y + forward.y * depth };
    const door = state.doors.find((candidate) => key(candidate.position) === key(point));
    if (state.walls.includes(key(point)) || door?.open === false) return depth;
  }
  return null;
}

function billboardQuad(depth: number, lateral: number): PortalQuad {
  const near = PORTAL_FRAMES[depth - 1];
  const far = PORTAL_FRAMES[depth];
  const scale = DEPTH_SCALE[depth];
  const frameWidth = far.right - far.left;
  const center = (far.left + far.right) / 2 + (lateral / Math.max(1, depth)) * frameWidth * 0.34;
  const width = frameWidth * 0.52 * scale;
  const height = (far.bottom - far.top) * 0.78 * scale;
  const bottom = far.bottom - (far.bottom - near.bottom) * 0.12 * scale;
  const top = bottom - height;
  return [{ x: center - width / 2, y: top }, { x: center + width / 2, y: top }, { x: center + width / 2, y: bottom }, { x: center - width / 2, y: bottom }];
}

export function projectEntities(state: GameState, sources: readonly EntitySource[]): readonly EntityBillboard[] {
  const opaqueDepth = nearestOpaqueDepth(state);
  return sources
    .map((source) => ({ source, coordinates: entityDepth(state, source.position) }))
    .filter((entry): entry is { source: EntitySource; coordinates: { depth: number; lateral: number } } => Boolean(entry.coordinates))
    .filter(({ coordinates }) => opaqueDepth === null || coordinates.depth < opaqueDepth)
    .map(({ source, coordinates }) => ({
      id: source.id,
      definitionId: source.definitionId,
      presentationId: source.presentationId,
      kind: source.kind,
      depth: coordinates.depth,
      position: source.position,
      quad: billboardQuad(coordinates.depth, coordinates.lateral),
      lightLevel: DEPTH_LIGHT[coordinates.depth]
    }))
    .sort((first, second) => second.depth - first.depth || first.id.localeCompare(second.id));
}

export function entitySignature(entities: readonly EntityBillboard[]): string {
  return entities.map((entity) => `${entity.id}:${entity.depth}:${entity.lightLevel}:${entity.quad.map((point) => `${point.x},${point.y}`).join(";")}`).join("|");
}

export function billboardFrameAt(presentationTimeMs: number): 0 | 1 {
  return Math.floor(Math.max(0, presentationTimeMs) / 260) % 2 as 0 | 1;
}
