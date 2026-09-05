# Decisions

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
