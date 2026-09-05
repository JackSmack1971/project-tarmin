import { createInitialState, type GameState } from "../sim/state";

export const RENDER_FIXTURES = [
  "wall-1", "wall-2", "wall-3", "straight-corridor", "left-opening-1", "left-opening-2",
  "right-opening-1", "t-intersection", "four-way-intersection", "corridor-darkness", "closed-door", "open-door", "defeated", "victorious", "combat-defeat"
] as const;
export type RenderFixture = typeof RENDER_FIXTURES[number];

function fixtureWalls(fixture: RenderFixture): string[] {
  const walls: string[] = [];
  const wall = (x: number, y: number): void => { walls.push(`${x},${y}`); };
  for (let depth = 1; depth <= 4; depth += 1) {
    wall(depth, -1);
    wall(depth, 1);
  }
  if (fixture.startsWith("wall-")) wall(Number(fixture.slice(5)), 0);
  if (fixture === "t-intersection" || fixture === "four-way-intersection") {
    walls.splice(walls.indexOf("1,-1"), 1);
    walls.splice(walls.indexOf("1,1"), 1);
  }
  if (fixture === "left-opening-1" || fixture === "left-opening-2" || fixture === "four-way-intersection") {
    walls.splice(walls.indexOf(`${fixture.endsWith("-2") ? 2 : 1},-1`), 1);
  }
  if (fixture === "right-opening-1" || fixture === "four-way-intersection") walls.splice(walls.indexOf("1,1"), 1);
  return walls;
}

export function createRenderFixture(fixture: RenderFixture): GameState {
  const status = fixture === "defeated" || fixture === "victorious" ? fixture : "playing";
  const initial = createInitialState(7391);
  return {
    ...initial, runStatus: status, playerHealth: status === "defeated" ? 0 : fixture === "combat-defeat" ? 1 : 10,
    player: { position: fixture === "combat-defeat" ? { x: 1, y: 1 } : { x: 0, y: 0 }, facing: "east" },
    walls: fixture === "combat-defeat" ? initial.walls : fixtureWalls(fixture),
    doors: fixture === "closed-door" || fixture === "open-door" ? [{ position: { x: 1, y: 0 }, open: fixture === "open-door" }] : []
  };
}

export function renderFixtureFromLocation(): RenderFixture | null {
  const value = new URLSearchParams(window.location.search).get("fixture");
  return (RENDER_FIXTURES as readonly string[]).includes(value ?? "") ? value as RenderFixture : null;
}
