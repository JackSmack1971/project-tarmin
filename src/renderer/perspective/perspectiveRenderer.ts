import { visibleCellKind, type GameState, type Point } from "../../sim/state";
import { intervalQuads, PORTAL_FRAMES, type PortalQuad } from "../../game/portalProjection";
import { materialFor } from "../materials";
import type { ProjectedFeature, SceneDescription, ScenePrimitive, SceneSurface } from "../scene";

export type RenderPrimitive = ScenePrimitive;
export const PERSPECTIVE_TRANSITION_MS = 140;
const DEPTH_LIGHT_LEVELS = [1, 0.68, 0.36, 0.14] as const;

const DELTAS = { north: { x: 0, y: -1 }, east: { x: 1, y: 0 }, south: { x: 0, y: 1 }, west: { x: -1, y: 0 } } as const;

function sidePoint(state: GameState, distance: number, side: "left" | "right"): Point {
  const forward = DELTAS[state.player.facing];
  const lateral = side === "left" ? { x: forward.y, y: -forward.x } : { x: -forward.y, y: forward.x };
  return { x: state.player.position.x + forward.x * distance + lateral.x, y: state.player.position.y + forward.y * distance + lateral.y };
}

export function projectDungeon(state: GameState): SceneDescription {
  const result: ScenePrimitive[] = [];
  const features: ProjectedFeature[] = [];
  const forward = DELTAS[state.player.facing];
  const cells = [1, 2, 3, 4].map((distance) => {
    const point = { x: state.player.position.x + forward.x * distance, y: state.player.position.y + forward.y * distance };
    return { distance, point, kind: visibleCellKind(state, point) };
  });
  const blocker = cells.findIndex((cell) => cell.kind !== "passage" && cell.kind !== "open-door");
  const startIndex = blocker === -1 ? cells.length - 1 : blocker;
  for (let index = startIndex; index >= 0; index -= 1) {
    const cell = cells[index];
    const quads = intervalQuads(PORTAL_FRAMES[index], PORTAL_FRAMES[index + 1]);
    if (cell.kind === "passage" || cell.kind === "open-door") {
      features.push({ kind: "archway", depth: cell.distance, cell: cell.point, quad: [{ x: PORTAL_FRAMES[index + 1].left, y: PORTAL_FRAMES[index + 1].top }, { x: PORTAL_FRAMES[index + 1].right, y: PORTAL_FRAMES[index + 1].top }, { x: PORTAL_FRAMES[index + 1].right, y: PORTAL_FRAMES[index + 1].bottom }, { x: PORTAL_FRAMES[index + 1].left, y: PORTAL_FRAMES[index + 1].bottom }], lightLevel: DEPTH_LIGHT_LEVELS[cell.distance - 1] ?? DEPTH_LIGHT_LEVELS[DEPTH_LIGHT_LEVELS.length - 1] });
    }
    addPrimitive(result, state, cell.distance, cell.point, "ceiling", cell.kind, quads.ceiling);
    addPrimitive(result, state, cell.distance, cell.point, "floor", cell.kind, quads.floor);
    const leftPoint = sidePoint(state, cell.distance, "left");
    const rightPoint = sidePoint(state, cell.distance, "right");
    const leftKind = visibleCellKind(state, leftPoint);
    const rightKind = visibleCellKind(state, rightPoint);
    addPrimitive(result, state, cell.distance, leftPoint, "left", leftKind, quads.leftWall);
    addPrimitive(result, state, cell.distance, rightPoint, "right", rightKind, quads.rightWall);
    if (leftKind === "wall" && shouldPlaceSconce(cell.distance, "left")) features.push(torchSconce(cell.distance, cell.point, "left", quads.leftWall));
    if (rightKind === "wall" && shouldPlaceSconce(cell.distance, "right")) features.push(torchSconce(cell.distance, cell.point, "right", quads.rightWall));
    if (cell.kind !== "passage" && cell.kind !== "open-door") {
      const frame = PORTAL_FRAMES[index + 1];
      addPrimitive(result, state, cell.distance, cell.point, "front", cell.kind, [{ x: frame.left, y: frame.top }, { x: frame.right, y: frame.top }, { x: frame.right, y: frame.bottom }, { x: frame.left, y: frame.bottom }]);
    }
  }
  return { primitives: result, features };
}

function shouldPlaceSconce(depth: number, surface: "left" | "right"): boolean {
  return (depth === 1 && surface === "left") || (depth === 3 && surface === "right");
}

function torchSconce(depth: number, cell: Point, surface: "left" | "right", quad: PortalQuad): ProjectedFeature {
  const center = quad.reduce((point, next) => ({ x: point.x + next.x / 4, y: point.y + next.y / 4 }), { x: 0, y: 0 });
  const inset = quad.map((point) => ({ x: center.x + (point.x - center.x) * 0.5, y: center.y + (point.y - center.y) * 0.55 })) as unknown as PortalQuad;
  return { kind: "torch-sconce", depth, cell, surface, quad: inset, lightLevel: DEPTH_LIGHT_LEVELS[depth - 1] ?? DEPTH_LIGHT_LEVELS[3] };
}

function stableVariation(state: GameState, point: Point, surface: SceneSurface): number {
  const text = `${state.seed}:${state.floor}:${point.x}:${point.y}:${surface}`;
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) hash = Math.imul(hash ^ text.charCodeAt(index), 16777619);
  return (hash >>> 0) % 4;
}

function addPrimitive(result: ScenePrimitive[], state: GameState, depth: number, cell: Point, surface: SceneSurface, kind: ScenePrimitive["kind"], quad: PortalQuad): void {
  const variation = stableVariation(state, cell, surface);
  result.push({ geometry: { depth, surface, cell, quad }, kind, material: materialFor(kind, surface, variation), lightLevel: DEPTH_LIGHT_LEVELS[depth - 1] ?? DEPTH_LIGHT_LEVELS[DEPTH_LIGHT_LEVELS.length - 1], variation });
}

export function primitiveSignature(primitives: readonly RenderPrimitive[]): string {
  return primitives.map(({ geometry, kind, material, lightLevel, variation }) => `${geometry.depth}:${geometry.surface}:${geometry.cell.x},${geometry.cell.y}:${kind}:${material}:${lightLevel}:${variation}:${geometry.quad.map((point) => `${point.x},${point.y}`).join(";")}`).join("|");
}
