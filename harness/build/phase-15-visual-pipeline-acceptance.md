# Phase 15 visual pipeline acceptance

| ID | Requirement | Verification | Result |
| --- | --- | --- | --- |
| P15-1 | Production uses Phaser WebGL and no Canvas/flat-polygon dungeon surface path. | `src/main.ts`, `rg` structural scan, Chromium canvas context | PASS: explicit `Phaser.WEBGL`; Mesh2D is the production surface path; browser context is WebGL |
| P15-2 | Material atlas lookup and palette conventions are coherent. | `npm test`, `src/renderer/meshGeometry.ts`, `src/game/palette.ts` | PASS: UV tests remain green; atlas lookup follows `MATERIALS[material].atlasRegion`; torch accent is semantic |
| P15-3 | Crisp logical rendering works at supported desktop sizes. | Chromium at 1280×720, 1600×900, 1920×1080 | PASS: internal canvas remains 1280×720, WebGL true, corridor depth 4 |
| P15-4 | Corridor, wall, door, turn/opening, and blocked movement states compose correctly. | Fixture routes and renderer metadata | PASS: straight depth 4; wall front termination; closed door depth 1; side opening route; base blocked input returns sealed feedback |
| P15-5 | Encounter/combat/defeat has visible entity and canonical disappearance. | Fresh seed 7391, Begin, ArrowUp, paced Space attacks | PASS: Warden at depth 1; combat reduces health; defeat yields `encounter:null`, `entities:[]`, loot present |
| P15-6 | Pause and reduced motion remain readable. | Escape, Resume focus, reduced-motion checkbox | PASS: paused mode and dialog visible; reduced motion reports duration 1 ms; canonical state unchanged |
| P15-7 | Presentation timing is non-authoritative. | projection tests and source scan | PASS: no `performance.now()` in state render path; `update(time)` only selects billboard frame; simulation tests remain deterministic |
| P15-8 | Required checks pass and durable docs are updated. | typecheck, lint, test, test:browser, build, diff review | PASS except `test:browser` is a documented non-automated notice; all other commands exit 0 |
| P15-9 | Delivery lands on main. | Git/remote inspection | PENDING until PR merge |

Browser evidence files: `phase-15-corridor-1280.png`, `phase-15-wall-blocked-1280.png`, `phase-15-turn-opening-1280.png`, `phase-15-closed-door-1280.png`, `phase-15-encounter-1280.png`, `phase-15-defeated-1280.png`, `phase-15-pause-1280.png`, `phase-15-reduced-motion-pause-1280.png`, `phase-15-exploration-1600.png`, and `phase-15-exploration-1920.png` in the browser output.
