# Asset Integration Phase 5 — First-Person Embodiment

| ID | Type | Requirement | Evidence | Status |
|---|---|---|---|---|
| FP5-01 | structural | Runtime hand art is a transformed Lo Fi derivative with provenance. | `FIRST_PERSON_HANDS_DERIVATION.json`, asset hash `FD0EB33388C614C8EE03E622630401FB4C9C4AEBF08E0B046C30E4A51C7EABFE`, manifest target | passed |
| FP5-02 | unit | Resolver consumes canonical left/right equipment and `presentationId`; no second equipment truth. | `src/renderer/firstPerson/handPresentation.test.ts`; 2 tests passed | passed |
| FP5-03 | functional | Empty and equipped states render stable supported hands; unsupported held art falls back cleanly. | Chromium first-person route and `__TARMIN_RENDERER__.firstPerson` metadata | passed |
| FP5-04 | visual | Hands sit above world/fog and below HUD without obscuring portal geometry, entities, or interaction-critical HUD. | Chromium screenshots at 1280×720, 1600×900, 1920×1080; visual review passed | passed |
| FP5-05 | compatibility | Combat, equipment changes, pause, terminal states, reduced motion, and canonical state remain unchanged. | `npm test` 58 tests; Chromium suite 6 passed; no page/application errors | passed |
| FP5-06 | delivery | Build log, commit, PR, and merged-main verification are complete. | `harness/build-log.md`, GitHub and Git inspection | pending |

Out of scope: held-object artwork, a fake torch item, item statistics, equipment
rules, commands, combat timing, visibility, save/state schemas, and simulation RNG.
