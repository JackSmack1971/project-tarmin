import { describe, expect, it } from "vitest";
import { createInitialState, visibleCellKind, type GameState } from "../../sim/state";
import { primitiveSignature, projectDungeon } from "./perspectiveRenderer";

const withDoors = (doors: GameState["doors"]): GameState => ({ ...createInitialState(), doors });

describe("renderer-neutral perspective primitives", () => {
  it("is deterministic and draws far-to-near surfaces", () => {
    const state = createInitialState();
    const first = projectDungeon(state);
    const second = projectDungeon(state);
    expect(primitiveSignature(first.primitives)).toBe(primitiveSignature(second.primitives));
    expect(first.primitives.map((primitive) => primitive.geometry.depth)).toEqual([2, 2, 2, 2, 2, 1, 1, 1, 1]);
    expect(first.primitives.every((primitive) => primitive.material && primitive.lightLevel > 0 && primitive.variation >= 0)).toBe(true);
  });

  it("terminates at a wall or closed door and leaves open doors traversable", () => {
    const closed = projectDungeon(withDoors([{ position: { x: 2, y: 1 }, open: false }])).primitives;
    expect(visibleCellKind(withDoors([{ position: { x: 2, y: 1 }, open: false }]), { x: 2, y: 1 })).toBe("closed-door");
    expect(closed.some((primitive) => primitive.geometry.surface === "front" && primitive.kind === "closed-door")).toBe(true);
    const open = projectDungeon(withDoors([{ position: { x: 2, y: 1 }, open: true }])).primitives;
    expect(open.some((primitive) => primitive.geometry.surface === "front" && primitive.kind === "open-door")).toBe(false);
  });

  it("keeps portal geometry independent from seed-driven presentation variation", () => {
    const first = projectDungeon(createInitialState(1)).primitives;
    const second = projectDungeon(createInitialState(2)).primitives;
    expect(first.map(({ geometry }) => geometry)).toEqual(second.map(({ geometry }) => geometry));
    expect(first.map(({ material, lightLevel, variation }) => ({ material, lightLevel, variation }))).not.toEqual(
      second.map(({ material, lightLevel, variation }) => ({ material, lightLevel, variation }))
    );
  });
});
