# Architecture

Project Tarmin has one authoritative simulation boundary: `src/sim/` owns canonical, serializable state and pure command transitions. `src/game/` adapts that state into Phaser presentation and forwards input as explicit commands. Encounters, combat, inventory, and deterministic randomness remain in the simulation boundary.

The browser shell uses Vite and Phaser 4.2.1. Phaser is presentation infrastructure only: it renders the framework-independent perspective primitives and presents simulation events. The production game configuration explicitly selects WebGL; it does not use Canvas fallback or move rules into scenes.

The simulation must not import Phaser or call `Math.random()`. Coordinates remain integer grid positions, facing remains cardinal, movement remains discrete, combat remains turn based, and state remains canonical and serializable.

`src/renderer/scene.ts` is the renderer-neutral scene contract. `projectDungeon()` owns spatial visibility, occlusion, normalized portal geometry, and far-to-near topology; it returns scene primitives whose `geometry` is separate from `material`, `lightLevel`, and stable presentation `variation`. `src/game/MainScene.ts` loads the data-only atlas and creates one Mesh2D object per scene primitive, with two triangles and atlas UVs; it may tint for depth and draw diagnostic/boundary strokes, but it may not recalculate dungeon topology or authoritatively mutate state. `src/renderer/materials.ts`, `src/renderer/assets/dungeonAtlas.ts`, and `src/renderer/meshGeometry.ts` are framework-independent presentation registries/helpers.

`src/renderer/entities/entityProjection.ts` is the renderer-neutral entity layer. It consumes explicit state-backed source descriptors, projects integer positions into portal depth and billboard quads, filters opaque-geometry occlusion, and produces deterministic far-to-near `EntityBillboard` values. Phaser selects sprite assets and presentation frames only; it never creates or removes authoritative entities and never uses animation timing to alter state.

The camera presentation pass is also non-authoritative. `MainScene` owns only
cosmetic torch, fog, and WebGL filter objects after consuming the renderer-neutral
scene and entity projections. Camera filters may grade or darken pixels, but
cannot change projected geometry, canonical visibility, RNG, commands, encounters,
or serialized state.
