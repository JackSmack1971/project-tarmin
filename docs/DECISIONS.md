# Decisions

## Phaser 4.2.1 and explicit WebGL

- Status: approved for the presentation modernization migration.
- Decision: upgrade the browser presentation layer from Phaser 3.90.0 with forced Canvas to Phaser 4.2.1 with `Phaser.WEBGL` explicitly selected.
- Scope: package/lockfile, Phaser adapter API compatibility, and rendering verification only.
- Preserved contracts: TypeScript, Vite, framework-independent `src/sim/`, seeded deterministic randomness, canonical serializable state, discrete cardinal grid movement, turn-based combat, and pseudo-3D portal projection.
- Migration note: Phaser 4 graphics point APIs require `Phaser.Math.Vector2` instances, so the adapter constructs vectors at the Phaser boundary. No authoritative model or renderer primitive format changed.
- Verification: typecheck, lint, unit/simulation tests, production build, structural simulation scan, and browser WebGL/runtime flow verification are required before merge.
