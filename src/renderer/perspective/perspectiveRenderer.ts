import { visibleCellKind, type GameState, type Point, type VisibleCellKind } from "../../sim/state";
import { intervalQuads, PORTAL_FRAMES, type PortalQuad } from "../../game/portalProjection";

export type Surface = "left" | "right" | "ceiling" | "floor" | "front";
export interface RenderPrimitive { readonly depth: number; readonly surface: Surface; readonly kind: VisibleCellKind; readonly quad: PortalQuad; }
export const PERSPECTIVE_TRANSITION_MS = 140;

const DELTAS = { north: { x: 0, y: -1 }, east: { x: 1, y: 0 }, south: { x: 0, y: 1 }, west: { x: -1, y: 0 } } as const;

function sidePoint(state: GameState, distance: number, side: "left" | "right"): Point {
  const forward = DELTAS[state.player.facing];
  const lateral = side === "left" ? { x: forward.y, y: -forward.x } : { x: -forward.y, y: forward.x };
  return { x: state.player.position.x + forward.x * distance + lateral.x, y: state.player.position.y + forward.y * distance + lateral.y };
}

export function projectDungeon(state: GameState): readonly RenderPrimitive[] {
  const result: RenderPrimitive[] = [];
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
    result.push({ depth: cell.distance, surface: "ceiling", kind: cell.kind, quad: quads.ceiling });
    result.push({ depth: cell.distance, surface: "floor", kind: cell.kind, quad: quads.floor });
    result.push({ depth: cell.distance, surface: "left", kind: visibleCellKind(state, sidePoint(state, cell.distance, "left")), quad: quads.leftWall });
    result.push({ depth: cell.distance, surface: "right", kind: visibleCellKind(state, sidePoint(state, cell.distance, "right")), quad: quads.rightWall });
    if (cell.kind !== "passage" && cell.kind !== "open-door") {
      const frame = PORTAL_FRAMES[index + 1];
      result.push({ depth: cell.distance, surface: "front", kind: cell.kind, quad: [{ x: frame.left, y: frame.top }, { x: frame.right, y: frame.top }, { x: frame.right, y: frame.bottom }, { x: frame.left, y: frame.bottom }] });
    }
  }
  return result;
}

export function primitiveSignature(primitives: readonly RenderPrimitive[]): string {
  return primitives.map((primitive) => `${primitive.depth}:${primitive.surface}:${primitive.kind}:${primitive.quad.map((point) => `${point.x},${point.y}`).join(";")}`).join("|");
}
