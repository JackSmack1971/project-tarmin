# Rendering specification

The game uses a pseudo-3D first-person portal projection. `src/renderer/perspective/` produces normalized, deterministic render primitives from simulation state; `src/game/MainScene.ts` maps those primitives into Phaser graphics. Phaser owns no dungeon topology, collision, combat, inventory, or random decisions.

The production renderer is Phaser 4.2.1 with an explicit `Phaser.WEBGL` game configuration. The scene uses standard Phaser 4 graphics, text, shape, camera, scale, and tween APIs. Portal geometry remains normalized and is scaled into the logical 1280×720 presentation surface.

Rendering changes must preserve:

- nested portal-frame contraction and far-to-near primitive ordering;
- integer grid coordinates and discrete cardinal movement;
- presentation-only movement transitions, including the 1 ms reduced-motion path;
- menu, exploration, combat, pause, and HUD readability;
- framework-independent simulation imports and seeded determinism.

Canvas is not the production path. Browser verification must confirm that the game canvas has a WebGL rendering context and that the core menu, exploration, combat, pause, and reduced-motion flows remain usable.
