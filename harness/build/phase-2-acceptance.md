# Phase 2 acceptance

| ID | Requirement | Verification | Evidence |
| --- | --- | --- | --- |
| P2-SIM-01 | Entering the guarded tile starts a combat encounter without moving through it. | Focused Vitest test | PASS — `npm test`, 7 tests |
| P2-SIM-02 | Combat is turn based and deterministic: attack deals fixed damage and the enemy replies while alive. | Focused Vitest tests with pinned seed | PASS — `npm test`, 7 tests |
| P2-SIM-03 | Defeating the enemy ends combat; retreat ends combat without changing grid position. | Focused Vitest tests | PASS — `npm test`, 7 tests |
| P2-ARCH-01 | Combat state and transitions remain in framework-independent simulation code. | Typecheck and static Phaser-boundary scan | PASS — typecheck and scan |
| P2-UI-01 | The browser presents encounter health, player health, and attack/retreat controls. | Running local browser inspection | PASS — `phase-2-combat.png` |
| P2-UI-02 | A user can enter combat and visibly resolve it with keyboard commands. | Running local browser interaction | PASS — ArrowUp entered combat; three Space presses defeated the guard; `phase-2-defeated.png` |

Out of scope: inventory, treasure rewards, save migration, generated maps, audio, and deployment.
