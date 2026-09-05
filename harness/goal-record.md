# Goal record

## Objective

Add a perspective-aware billboard entity layer so state-backed dungeon entities visibly inhabit the first-person view. The active Ashbound Warden must render at its canonical encounter depth with deterministic scaling, ordering, and geometry occlusion; the contract must be reusable for monsters, items, treasure, and environmental features without adding unsupported gameplay systems.

## Current phase

Complete — entity projection, browser integration, and PR delivery verified.

## Constraints

TypeScript, Vite, Phaser presentation, framework-independent pure simulation, deterministic seeded state, integer grid coordinates, cardinal facing, original low-resolution pixel art, presentation-only animation, and no gameplay/state mutation from rendering. Preserve the textured portal renderer already on `main`.

## Non-goals

Do not invent new gameplay entities, encounter rules, maps, persistence, or real-time combat. Existing canonical state remains authoritative; defeated/absent entities must disappear from presentation.

## Acceptance criteria

| ID | Requirement | Evidence |
| --- | --- | --- |
| E1 | Canonical state projects active encounters and reusable entity kinds into the same discrete depth model as dungeon geometry. | Pure projection/entity tests |
| E2 | Entity billboards scale by depth, use deterministic placement/order, and remain occluded by blocking geometry. | Projection tests plus source inspection |
| E3 | Presentation animation is deterministic/presentation-only and cannot affect state or combat outcomes. | Unit tests, state comparison, browser inspection |
| E4 | Active Ashbound Warden is visibly present in the first-person view at encounter depth; far entities remain readable and near entities are prominent. | Browser screenshots/runtime inspection |
| E5 | Entity disappears when canonical state no longer contains it. | Simulation/browser defeat or retreat flow |
| E6 | Required repository checks pass. | typecheck, lint, test, test:browser, build |
| E7 | Rendering/art/gameplay docs and build evidence are updated. | docs and `harness/build-log.md` |
| E8 | Changes are committed on a feature branch, submitted as a PR to `main`, checks pass, and merged state is verified on `main`. | Git/remote inspection |

## Authorized scope

Local repository edits, tests, browser verification, feature branch creation, commit, PR creation, and merge to `main` as explicitly requested. No unrelated cleanup or new external services.

## Stopping conditions

Stop only when every acceptance row has independent evidence, required docs/build log are current, and the verified merged result is present on `main`. All rows are now evidenced by the phase-10 acceptance record and PR #9 merge verification.

## Evidence index

This record, `harness/progress-log.md`, `harness/build/`, and `harness/build-log.md`.
