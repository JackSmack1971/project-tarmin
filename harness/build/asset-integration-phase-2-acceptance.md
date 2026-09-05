# Asset Integration Phase 2 acceptance

| ID | Requirement | Verification | Result |
| --- | --- | --- | --- |
| AI2-01 | Old School source is transformed and promoted through the approved workflow. | Derivation script, source manifest, recorded hashes, and runtime asset inspection. | PASS — Old School brick-door source remaps the existing `iron-door` atlas region and emits `archway-stone.png`; source archive SHA-256 and output hashes are recorded in `DUNGEON_ATLAS_DERIVATION.json`. |
| AI2-02 | The environment atlas contract remains stable. | Material registry/UV tests and atlas metadata inspection. | PASS — eight existing semantic IDs and padded 32×32 regions remain unchanged. |
| AI2-03 | Archways use a renderer-neutral presentation contract without `MaterialId` abuse or a second spatial model. | Typecheck, projection tests, source inspection. | PASS — `SceneDescription.features` contains only `ProjectedFeature` archways derived from visible portal cells. |
| AI2-04 | Features never reveal hidden cells and stop at the nearest opaque wall/closed door. | Focused projection tests and browser fixture assertions. | PASS — open passage features project far-to-near; closed-door fixture has no feature beyond the blocker. |
| AI2-05 | Blockers and doors remain clearer than decoration. | Chromium closed-door and open-passage captures plus primitive metadata assertion. | PASS — closed fixture retains `1:front:closed-door`; feature layer is absent there. |
| AI2-06 | Deterministic projection remains stable. | Seed-independent feature geometry test and full unit suite. | PASS — `npm test` 54 tests passed. |
| AI2-07 | Browser-visible open passages, closed iron door, turn/opening, and deep corridor have no app/page errors. | Playwright Chromium acceptance and screenshots. | PASS — `npm run test:browser`, 3 tests passed; evidence: `phase-2-open-passage.png`, `phase-2-closed-iron-door.png`, `phase-2-turn-opening.png`, `phase-2-deep-corridor.png`. |
