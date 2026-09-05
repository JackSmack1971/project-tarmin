# Phase 6 acceptance — nested portal projection

| ID | Requirement | Verification | Evidence |
| --- | --- | --- | --- |
| P1 | D0–D4 frames share a center and contract in width/height | `npm test` projection geometry test | `src/game/portalProjection.test.ts` |
| P2 | Each cell interval contains left, right, ceiling, and floor quads | `npm test` projection geometry test | `src/game/portalProjection.test.ts` |
| P3 | Front walls occupy their exact depth frame | Fixed browser fixtures | `portal-wall-1.png`, `portal-wall-2.png`, `portal-wall-3.png` |
| P4 | Four-cell corridor visibly recedes through nested stages | Fixed browser screenshot and visual review | `portal-straight-corridor.png` |
| P5 | Left/right openings are dark trapezoidal apertures | Fixed browser screenshots and visual review | `portal-left-opening-1.png`, `portal-left-opening-2.png`, `portal-right-opening-1.png` |
| P6 | Intersections remain readable without texture/props/effects | Fixed browser screenshots and visual review | `portal-t-intersection.png`, `portal-four-way-intersection.png` |
| P7 | Distant corridor terminates in blackness | Fixed browser screenshot and visual review | `portal-corridor-darkness.png` |
| P8 | Simulation/topology/cardinal controls remain intact | Existing simulation tests plus browser ArrowUp combat probe | `src/sim/state.test.ts`, `portal-gameplay-combat.png` |
| P9 | Canvas 2D and renderer/simulation boundary remain intact | Typecheck/build and source inspection | `npm run typecheck`, `npm run build` |
| P10 | No added textures, props, particles, lighting, UI, monsters, or animation | Diff/source inspection | `src/game/MainScene.ts` |

Runtime conditions: local Vite server, Chromium Playwright, 1280×720 CSS screenshot, default deterministic state for fixtures, no fixture input after load.

Human visual review: P3–P7 and P10 are screenshot/source judgments; automated tests do not substitute for them.
