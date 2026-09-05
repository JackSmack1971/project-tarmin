# Phase 11 atmosphere and lighting acceptance

| ID | Requirement | Verification | Status |
| --- | --- | --- | --- |
| A1 | Textured materials remain visible with deterministic depth tint. | `wall-1` and `straight-corridor` browser captures plus projection tests. | pass |
| A2 | Torch-like illumination is localized and cosmetic. | Browser capture and source inspection; renderer atmosphere metadata. | pass |
| A3 | Entities render after lighting and before fog/filter treatment without changing canonical state. | Encounter browser flow, entity projection tests, deterministic simulation tests. | pass |
| A4 | Darkness/fog improves depth while preserving silhouettes, blockers, and HUD readability. | Near/deep/encounter captures and visual review. | pass |
| A5 | Static WebGL grading/vignette are restrained and do not use frame timing. | WebGL browser inspection, source inspection, typecheck/build. | pass |
| A6 | Reduced motion preserves the static pass and changes only transition timing. | Browser toggle plus renderer state inspection. | pass |
| A7 | Required checks pass. | `npm run typecheck`, `npm run lint`, `npm test`, `npm run test:browser`, `npm run build`. | pass |
| A8 | Documentation and runtime evidence are recorded. | This file, owned docs, context, and `harness/build-log.md`. | pass |
| A9 | Feature branch, PR to `main`, passing checks, and merged `main`. | Git and remote inspection. | pending |

The missing uncommitted `public/assets/entities/ashbound-warden.svg` is a
pre-existing worktree condition and is tracked separately from this phase.
