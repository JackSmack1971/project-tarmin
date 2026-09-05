# Phase 8 textured Mesh2D context

- The authoritative source is `src/renderer/perspective/perspectiveRenderer.ts`; do not move topology or visibility into Phaser.
- `ScenePrimitive.geometry.quad` is normalized and far-to-near. `src/renderer/meshGeometry.ts` maps its four corners to inset UV corners in the original 64×8 atlas.
- `MainScene` loads `/assets/dungeon/dungeon-surfaces.svg` in `preload()` and renders each dungeon primitive with Phaser 4 Mesh2D. Graphics is retained only for strokes and the optional perspective debug overlay.
- Phaser 4.2.1’s Mesh2D implementation has `setTint()` at runtime but its declaration omits the method; keep any adapter cast narrow and documented by the type boundary.
- Required runtime evidence covers straight/open corridor, terminating wall, side openings/walls, and closed door, with WebGL and zero console errors/warnings.
