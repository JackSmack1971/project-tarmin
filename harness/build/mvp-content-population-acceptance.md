# MVP content population acceptance matrix

| ID | Category | Priority | Requirement | Observable oracle | Verification | Status |
|---|---|---:|---|---|---|---|
| CP-01 | content | must | All registry references and ranges are valid | `validateContent(CONTENT)` returns no errors | focused content test | passed — `src/content/content.test.ts`, 50-test suite |
| CP-02 | content | must | Live floor has roughly three monster types and 6–8 persistent instances | initial canonical state has 3 definitions and 6–8 stable records | simulation/content test | passed — 3 types, 7 instances asserted |
| CP-03 | content | must | Live floor has 6–8 useful item definitions across weapon, defense, consumable, treasure roles | registry categories and definitions are asserted | content test/source inspection | passed — 6 definitions, all 4 categories |
| CP-04 | functional | must | Encounters use stable world records and defeated enemies never respawn | each populated encounter re-enters by ID; defeated revisit has no encounter | deterministic simulation tests | passed — persistent-world tests plus browser revisit |
| CP-05 | functional | must | Loot is deterministic, registry-backed, spatially persistent, and pickup-owned | same seed/commands match; world item remains at drop cell until pickup | simulation tests | passed — same-seed route, registry lookup, location/pickup assertions |
| CP-06 | compatibility | must | Existing combat/inventory/objective/exit path remains completable | seeded route defeats required encounters, acquires seal, reaches exit, wins | simulation test + browser | passed — 50 tests and fresh Chromium victory at `(2,4)` |
| CP-07 | architectural | must | No roaming AI, procedural generation, multi-floor, saves, or second authoritative model | changes remain fixed data plus existing command transitions | source inspection + tests | passed — fixed records/data; no forbidden simulation imports or RNG |
| CP-08 | non-functional | must | Required checks pass | typecheck, lint, test, browser status, build exit successfully | commands | passed — all required commands exit 0 |
| CP-09 | browser/human | must | Populated floor is readable and usable in running Chromium | encounter/loot/pickup/revisit/complete flow works with zero errors | Playwright smoke flow plus manual visual review | passed — automated Warden/Mireling flow; manual visual evidence remains separately recorded |
| CP-10 | documentation | must | Gameplay/content/testing/README/build evidence match population | docs name implemented population and verification | file inspection | passed — docs and harness records updated |
| CP-11 | delivery | must | Focused branch and PR target `main` | commit and open PR exist | git/remote inspection | planned — this acceptance change |
| CP-12 | delivery | must | PR merges only after checks and merged result is verified on `main` | local and remote `main` contain merged change and are clean | git/remote/check inspection | planned — this acceptance change |

No contradictory or unavailable criteria identified. CP-09 includes a human
readability judgment; runtime state and screenshots are evidence, not a
substitute for that observation.

## Evidence record

- Focused branch: `feature/mvp-content-population`.
- Browser server: Vite at `http://127.0.0.1:5174/`, fresh 1280×720 Chromium
  page, WebGL renderer, zero console errors and zero warnings.
- Added encounter: `ArrowRight`, `ArrowUp` ×2, `ArrowLeft`, `ArrowUp` ×4
  reached `(4,3)` and entered `monster-mireling-3`; four Space attacks
  defeated it, `P` picked up its world loot, and revisit of `(5,3)` had no
  encounter/entity. Capture: `harness/evidence/mvp-population-mireling.png`.
- Third type: `ArrowRight`, `ArrowUp` from `(5,3)` entered
  `monster-scavenger-2` with `definitionId=gloam-scavenger`. Capture:
  `harness/evidence/mvp-population-scavenger.png`.
- Completion: fresh seed `7391`, ArrowUp, four Space attacks, P, then
  Right/Up/Up/Left/Up/Right/Up reached `(2,4)` with `runStatus=victorious`,
  `objective.complete=true`, and the visible RUN COMPLETE panel. Capture:
  `harness/evidence/mvp-population-victorious.png`.
