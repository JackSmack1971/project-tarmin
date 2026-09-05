# Phase 7 renderer/material context

- `src/renderer/scene.ts` defines `ProjectedGeometry`, `ScenePrimitive`, and `SceneDescription`; geometry carries depth, surface, source cell, and normalized quad while metadata carries kind, material, light level, and stable variation.
- `src/renderer/perspective/perspectiveRenderer.ts` remains framework-independent and owns visibility/occlusion/topology. Its stable variation hash uses seed, floor, source cell, and surface; it never calls `Math.random()`.
- `src/renderer/materials.ts` maps visible cell/surface roles to stable material IDs. `src/renderer/assets/dungeonAtlas.ts` describes the original 64×8 SVG atlas at `public/assets/dungeon/dungeon-surfaces.svg`.
- `src/game/MainScene.ts` is the only consumer that maps material fallback colors and normalized geometry into Phaser graphics. The authoritative simulation and state model were unchanged.
- Browser evidence: `?fixture=straight-corridor` showed WebGL and visible depth 4 with no console errors/warnings; `?fixture=closed-door&perspectiveDebug=1` showed depth-1 front closed-door termination with no console errors/warnings. Captures: `phase-07-straight-corridor.png`, `phase-07-closed-door.png`.
