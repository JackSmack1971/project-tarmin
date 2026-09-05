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
