import { describe, expect, it } from "vitest";
import { createInitialState, visibleCellKind, type GameState } from "../../sim/state";
import { primitiveSignature, projectDungeon } from "./perspectiveRenderer";

const withDoors = (doors: GameState["doors"]): GameState => ({ ...createInitialState(), doors });

describe("renderer-neutral perspective primitives", () => {
  it("is deterministic and draws far-to-near surfaces", () => {
    const state = createInitialState();
    expect(primitiveSignature(projectDungeon(state))).toBe(primitiveSignature(projectDungeon(state)));
    expect(projectDungeon(state).map((primitive) => primitive.depth)).toEqual([2, 2, 2, 2, 2, 1, 1, 1, 1]);
  });

  it("terminates at a wall or closed door and leaves open doors traversable", () => {
    const closed = projectDungeon(withDoors([{ position: { x: 2, y: 1 }, open: false }]));
    expect(visibleCellKind(withDoors([{ position: { x: 2, y: 1 }, open: false }]), { x: 2, y: 1 })).toBe("closed-door");
    expect(closed.some((primitive) => primitive.surface === "front" && primitive.kind === "closed-door")).toBe(true);
    const open = projectDungeon(withDoors([{ position: { x: 2, y: 1 }, open: true }]));
    expect(open.some((primitive) => primitive.surface === "front" && primitive.kind === "open-door")).toBe(false);
  });
});
