# Goal record

## Objective

Complete and harden the Phase 15 visual pipeline so the merged browser game consistently reads as original high-quality pixel-art dungeon composition: coherent atlas materials and palette, crisp WebGL scaling, correct portal depth/UV/occlusion/composition, and browser-suitable presentation performance.

## Current phase

Complete — local checks, Chromium evidence, PR #17, and merged-main verification are complete.

## Constraints and non-goals

Preserve TypeScript, Vite, Phaser 4/WebGL, framework-independent deterministic simulation, integer cardinal grid movement, turn-based combat, canonical serializable state, pseudo-3D portal projection, and original/licensed assets. Do not redesign gameplay, add a backend, or replace the grid interaction grammar.

## Acceptance criteria

| ID | Requirement | Evidence | Status |
| --- | --- | --- | --- |
| P15-1 | WebGL is active and no obsolete Canvas/flat-polygon production surface path remains. | source scan, browser WebGL context, build | passed locally |
| P15-2 | Atlas/material IDs and semantic palette are consistent; UVs are inset and metadata-driven. | material/mesh tests and source inspection | passed locally |
| P15-3 | Crisp 1280×720 presentation works at 1280×720, 1600×900, and 1920×1080. | Chromium captures and canvas measurements | passed locally |
| P15-4 | Corridor, wall, doorway, turning/opening, and blocked movement compositions preserve depth and opaque termination. | fixture runtime state plus screenshots | passed locally |
| P15-5 | Encounter/combat/defeat shows the Warden, retains HUD hierarchy, and removes it when canonical state is gone. | paced Chromium flow and screenshots | passed locally |
| P15-6 | Pause and reduced-motion states remain readable and presentation-only. | Chromium state inspection and pause capture | passed locally |
| P15-7 | Presentation timing cannot alter authoritative state. | projection tests and source inspection | passed locally |
| P15-8 | Required checks and durable documentation are current. | command results and docs/build log | passed locally |
| P15-9 | Feature branch, PR to `main`, passing checks, merge, and merged-main verification. | PR #17 and local `main` at `b9bb4ef` | passed |

## Authorized scope

Repository-local edits, tests, browser verification, feature branch, commit, PR creation, and merge to `main`, as explicitly requested. No unrelated cleanup or new services.

## Stopping condition

All criteria are independently evidenced; the merged `main` tree is the verified result.

## Evidence index

`harness/build/phase-15-visual-pipeline-acceptance.md`, `harness/fidelity/phase-15-visual-pipeline.json`, `harness/context/phase-15-visual-pipeline-context.md`, and `harness/build-log.md`.
