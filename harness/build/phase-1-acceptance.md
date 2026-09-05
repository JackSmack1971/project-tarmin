# Phase 1 acceptance

| ID | Requirement | Evidence |
| --- | --- | --- |
| P1-SIM-01 | Seeded initial state is deterministic and serializable. | PASS — `src/sim/state.test.ts` plus strict TypeScript build. |
| P1-SIM-02 | Turning and forward movement are discrete and wall-colliding. | PASS — 4 focused simulation tests. |
| P1-ARCH-01 | Simulation is framework-independent. | PASS — static import/randomness scan plus typecheck. |
| P1-UI-01 | A browser shows a first-person dungeon view and controls. | PASS — local Vite app loaded; Phaser canvas `960x640`; screenshot captured. |
| P1-UI-02 | Each accepted command visibly updates turn/facing/position-derived view. | PASS — ArrowRight and ArrowUp exercised in browser; app remained live with no console errors. |

Out of scope: combat, inventory, treasure, save migration, generated maps, audio, and production deployment.
