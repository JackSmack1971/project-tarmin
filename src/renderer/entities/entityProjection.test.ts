import { describe, expect, it } from "vitest";
import { createInitialState, executeCommand, type GameState } from "../../sim/state";
import { billboardFrameAt, entitySignature, projectEntities, type EntitySource } from "./entityProjection";

const encounterSource = (state: GameState): EntitySource => ({
  id: state.encounter!.id,
  definitionId: state.encounter!.definitionId,
  presentationId: "warden",
  kind: "monster",
  position: state.encounter!.position
});

describe("perspective entity billboards", () => {
  it("projects the canonical encounter at its discrete forward depth", () => {
    const state = executeCommand(createInitialState(), "moveForward").state;
    const [entity] = projectEntities(state, [encounterSource(state)]);
    expect(entity).toMatchObject({ id: "monster-warden-1", definitionId: "ashbound-warden", depth: 1, kind: "monster" });
    expect(entity.quad[0].x).toBeLessThan(entity.quad[1].x);
    expect(entity.quad[2].y).toBeGreaterThan(entity.quad[0].y);
  });

  it("scales and orders near/far billboards deterministically", () => {
    const state = { ...createInitialState(), walls: createInitialState().walls.filter((wall) => wall !== "3,1") };
    const sources: EntitySource[] = [
      { id: "far", definitionId: "glass-mireling", presentationId: "mireling", kind: "monster", position: { x: 4, y: 1 } },
      { id: "near", definitionId: "ashbound-warden", presentationId: "warden", kind: "monster", position: { x: 2, y: 1 } }
    ];
    const first = projectEntities(state, sources);
    const second = projectEntities(state, sources);
    expect(entitySignature(first)).toBe(entitySignature(second));
    expect(first.map((entity) => entity.id)).toEqual(["far", "near"]);
    expect(first[1].quad[2].y - first[1].quad[0].y).toBeGreaterThan(first[0].quad[2].y - first[0].quad[0].y);
  });

  it("does not project through a wall or closed door", () => {
    const state = createInitialState();
    const sources: EntitySource[] = [{ id: "behind-wall", definitionId: "ashbound-warden", presentationId: "warden", kind: "monster", position: { x: 3, y: 1 } }];
    expect(projectEntities(state, sources)).toEqual([]);
    const withDoor: GameState = { ...state, doors: [{ position: { x: 2, y: 1 }, open: false }] };
    expect(projectEntities(withDoor, [{ ...sources[0], position: { x: 3, y: 1 } }])).toEqual([]);
  });

  it("keeps animation timing outside the authoritative entity projection", () => {
    const state = executeCommand(createInitialState(), "moveForward").state;
    const entitiesAtZero = projectEntities(state, [encounterSource(state)]);
    const entitiesLater = projectEntities(state, [encounterSource(state)]);
    expect(entitySignature(entitiesAtZero)).toBe(entitySignature(entitiesLater));
    expect(billboardFrameAt(0)).toBe(0);
    expect(billboardFrameAt(260)).toBe(1);
    expect(billboardFrameAt(520)).toBe(0);
    expect(state).toEqual(executeCommand(createInitialState(), "moveForward").state);
  });
});
