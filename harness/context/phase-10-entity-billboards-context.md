# Phase 10 entity billboard context

- Canonical encounter state remains in `src/sim/state.ts`; the active Ashbound Warden has integer position `(2,1)` while the player is at `(1,1)` facing east.
- `src/renderer/entities/entityProjection.ts` owns renderer-neutral entity depth, lateral placement, normalized billboard quad, opaque-depth filtering, stable ordering, and presentation-only frame selection.
- `MainScene` adapts only the active encounter into a source descriptor and consumes `EntityBillboard`; absent encounter state yields no entity sprite. The reusable source shape is ready for future position-bearing items, treasure, and features without adding unsupported simulation systems.
- The original low-resolution sheet is `public/assets/entities/ashbound-warden.svg`; it contains two 32×48 crisp pixel-art frames and is loaded as a Phaser spritesheet.
- Browser evidence route: `http://127.0.0.1:5176/`, seed `42`, Begin Descent, ArrowUp, Space until `encounter:null`, then ArrowRight. Encounter screenshot: `entity-encounter-1280.png`; defeated screenshot: `entity-defeated-1280.png`; observed page/console errors: 0.
