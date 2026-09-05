# Architecture

Project Tarmin has one authoritative simulation boundary: `src/sim/` owns canonical, serializable state and pure command transitions. `src/game/` adapts that state into Phaser presentation and forwards input as explicit commands. Encounters, combat, inventory, and deterministic randomness remain in the simulation boundary.

The browser shell uses Vite and Phaser 4.2.1. Phaser is presentation infrastructure only: it renders the framework-independent perspective primitives and presents simulation events. The production game configuration explicitly selects WebGL; it does not use Canvas fallback or move rules into scenes.

The simulation must not import Phaser or call `Math.random()`. Coordinates remain integer grid positions, facing remains cardinal, movement remains discrete, combat remains turn based, and state remains canonical and serializable.

`src/renderer/scene.ts` is the renderer-neutral scene contract. `projectDungeon()` owns spatial visibility, occlusion, normalized portal geometry, and far-to-near topology; it returns scene primitives whose `geometry` is separate from `material`, `lightLevel`, and stable presentation `variation`. `src/renderer/materials.ts` and `src/renderer/assets/dungeonAtlas.ts` are data-only presentation registries. Phaser may map those fields to graphics or textures, but may not recalculate dungeon topology or authoritatively mutate state.
