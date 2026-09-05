# Decisions

## Canonical run lifecycle

- Status: approved implementation decision for the run-lifecycle slice.
- Decision: store `playing`, `defeated`, or `victorious` in canonical simulation
  state rather than deriving lifecycle from renderer mode or health alone.
- Consequences: defeat clears active combat and rejects later commands;
  `completeRun()` is the future dungeon-objective victory hook; restart creates a
  clean seeded initial state. `rulesVersion` remains unchanged because the
  current save contract has no migration surface.

## Phaser 4.2.1 and explicit WebGL

- Status: approved for the presentation modernization migration.
- Decision: upgrade the browser presentation layer from Phaser 3.90.0 with forced Canvas to Phaser 4.2.1 with `Phaser.WEBGL` explicitly selected.
- Scope: package/lockfile, Phaser adapter API compatibility, and rendering verification only.
- Preserved contracts: TypeScript, Vite, framework-independent `src/sim/`, seeded deterministic randomness, canonical serializable state, discrete cardinal grid movement, turn-based combat, and pseudo-3D portal projection.
- Migration note: Phaser 4 graphics point APIs require `Phaser.Math.Vector2` instances, so the adapter constructs vectors at the Phaser boundary. No authoritative model or renderer primitive format changed.
- Verification: typecheck, lint, unit/simulation tests, production build, structural simulation scan, and browser WebGL/runtime flow verification are required before merge.

## Renderer-neutral scene/material contract

- Status: approved for the renderer-contract phase.
- Decision: keep portal geometry in `ScenePrimitive.geometry` and carry material identity, light level, and stable variation as separate presentation metadata. `projectDungeon()` remains the sole projection/occlusion source of truth.
- Scope: renderer-neutral scene types, deterministic material selection, and an original low-resolution surface atlas registry/source.
- Preserved contracts: no Phaser in simulation or renderer-neutral generation, no uncontrolled randomness, no gameplay/state changes, and explicit Phaser 4.2.1 WebGL presentation.

## Persistent dungeon-world state

- Status: approved implementation decision for the persistent encounter slice.
- Decision: store explicit monster instances in canonical `GameState.monsters` and use the existing `encounter` field only as an active combat projection. Store uncollected ground items as world-positioned item instances referenced by `loot` IDs.
- Consequences: movement queries undefeated monster instances; combat synchronizes health and defeat before clearing active combat; revisiting a defeated cell cannot respawn its monster; pickup is location-bound. `rulesVersion` remains unchanged because this goal does not add save migrations.
- Preserved contracts: seeded deterministic RNG, renderer-neutral serializable state, current combat/inventory commands, and the existing Phaser presentation/input seam.

## MVP content population

- Status: approved implementation decision for the one-floor content slice.
- Decision: use seven fixed monster instances across the Ashbound Warden, Glass Mireling, and Gloam Scavenger definitions; expand the registry to six useful item definitions and use weighted seeded loot tables.
- Consequences: the east branch is opened as fixed map content so the added encounters are reachable, while the Warden's guaranteed Seal preserves the existing objective/exit route. No roaming AI, procedural generation, multi-floor progression, saves, or final balance pass is introduced.
