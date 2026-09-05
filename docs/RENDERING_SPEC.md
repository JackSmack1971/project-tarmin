# Rendering specification

The game uses a pseudo-3D first-person portal projection. `src/renderer/perspective/` produces a renderer-neutral `SceneDescription` from simulation state; `src/game/MainScene.ts` maps that description into Phaser graphics.

Each scene primitive has two deliberately separate concerns:

- `geometry`: integer-grid source cell, normalized depth/surface, and normalized quad;
- presentation metadata: visible cell kind, material identity, depth-derived light level, and a stable variation selector.

`projectDungeon()` remains the spatial source of truth. It emits far-to-near portal intervals and stops at the nearest opaque wall or closed door. It must not import Phaser, call `Math.random()`, mutate simulation state, or depend on frame timing. `primitiveSignature()` is a compact deterministic diagnostic for geometry and metadata regression tests.

Material IDs are stable contracts, not artwork. The data-only material registry points to regions in the original low-resolution atlas at `public/assets/dungeon/dungeon-surfaces.svg`; fallback colors keep the current graphics adapter usable while textured rendering remains a later presentation concern. Variation is derived from seed, floor, source cell, and surface through a stable hash.

The production renderer is Phaser 4.2.1 with explicit `Phaser.WEBGL`; normalized portal geometry is scaled into the logical 1280×720 presentation surface. Browser verification must confirm WebGL and representative corridor/door states.
