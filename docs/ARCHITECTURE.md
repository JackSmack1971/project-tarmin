# Architecture

Project Tarmin has one authoritative simulation boundary: `src/sim/` owns canonical, serializable state and pure command transitions. `src/game/` adapts that state into Phaser presentation and forwards input as explicit commands. Encounters, combat, inventory, and deterministic randomness remain in the simulation boundary.

`GameState.runStatus` is the authoritative run lifecycle: `playing`, `defeated`,
or `victorious`. A terminal state clears active combat, rejects subsequent
commands without advancing the turn, and is exposed to the shell as a terminal
input/presentation mode. The one-floor run records a Star-Forged Seal objective
and fixed exit at `(2,4)` in canonical state; entering the exit only completes
the run after the seal is possessed. Rendering cannot declare victory.

The browser shell uses Vite and Phaser 4.2.1. Phaser is presentation infrastructure only: it renders the framework-independent perspective primitives and presents simulation events. The production game configuration explicitly selects WebGL; it does not use Canvas fallback or move rules into scenes.

The simulation must not import Phaser or call `Math.random()`. Coordinates remain integer grid positions, facing remains cardinal, movement remains discrete, combat remains turn based, and state remains canonical and serializable.

`src/renderer/scene.ts` is the renderer-neutral scene contract. `projectDungeon()` owns spatial visibility, occlusion, normalized portal geometry, and far-to-near topology; it returns scene primitives whose `geometry` is separate from `material`, `lightLevel`, and stable presentation `variation`. `src/game/MainScene.ts` loads the data-only atlas and creates one Mesh2D object per scene primitive, with two triangles and atlas UVs; it may tint for depth and draw diagnostic/boundary strokes, but it may not recalculate dungeon topology or authoritatively mutate state. `src/renderer/materials.ts`, `src/renderer/assets/dungeonAtlas.ts`, and `src/renderer/meshGeometry.ts` are framework-independent presentation registries/helpers.

`SceneDescription.features` is a separate renderer-neutral architectural-feature
layer. Its archways are derived only from visible passage cells, reuse portal geometry,
and are cut off by the same nearest opaque wall/closed-door boundary. They are
presentation overlays, not materials, simulation entities, or a second coordinate model.

`src/renderer/entities/entityProjection.ts` is the renderer-neutral entity layer. It consumes explicit state-backed source descriptors, projects integer positions into portal depth and billboard quads, filters opaque-geometry occlusion, and produces deterministic far-to-near `EntityBillboard` values. Phaser selects sprite assets and presentation frames only; it never creates or removes authoritative entities and never uses animation timing to alter state.

`GameState.monsters` is the authoritative dungeon-world collection. Each monster instance has a stable ID, content definition ID, integer position, current health, and defeated flag. `encounter` is only the active combat projection consumed by the current input/HUD seam; movement looks up an undefeated world instance, and combat writes health and defeat back to that instance before clearing the projection. World item instances carry an integer position while uncollected; `loot` contains their IDs for the current ground-item interaction and pickup changes ownership to the ring.

The Warden's deterministic loot is the Star-Forged Seal. Objective possession
and completion are state-backed, so reaching the exit without the seal emits a
locked-exit event and remains playable.

The MVP population is fixed content rather than an AI or procedural system:
seven world monster records reference three registry definitions, and six item
definitions cover weapon, defense, consumable, and treasure roles. The east
branch is part of the fixed map so the additional encounters are reachable;
the renderer still observes only the active encounter projection.

The camera presentation pass is also non-authoritative. `MainScene` owns only
cosmetic torch, fog, and WebGL filter objects after consuming the renderer-neutral
scene and entity projections. Camera filters may grade or darken pixels, but
cannot change projected geometry, canonical visibility, RNG, commands, encounters,
or serialized state.

Phase 15 keeps state-change rendering bounded to transient display objects and
clears destroyed entity references before rebuilding. The per-frame update path
only advances the presentation billboard frame; it does not project geometry or
read or mutate authoritative state.
