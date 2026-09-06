# Mutation Remediation Plan — 20260906T164910388Z_70041cd_mutation-remediation

**Base commit:** `70041cd9c853ff85012e4242dc01952a42421c10`  
**Source guardian runs:** `20260906T164224233Z_70041cd9`  
**Context fingerprint:** `sha256:5693805b67f8242a84790e50d639dd7b48400aabf8dd55cadde36594b895102e`  
**Status:** DRAFT — not executor-ready until sealed

## Objective

Turn the guardian's active surviving/no-coverage mutants into the smallest repository-consistent set of behavior-level test improvements, with independent mutation re-validation and explicit delivery gates.

## Evidence summary

- Active actionable mutants: 2796
- Source files: `src/audio/actionCue.ts`, `src/audio/ambientCue.ts`, `src/audio/healthCue.ts`, `src/content/items.ts`, `src/content/monsters.ts`, `src/content/registry.ts`, `src/game/MainScene.ts`, `src/game/palette.ts`, `src/game/portalProjection.ts`, `src/game/renderFixtures.ts`, `src/game/seed.ts`, `src/input/bindings.ts`, `src/input/input-controller.ts`, `src/main.ts`, `src/renderer/assets/dungeonAtlas.ts`, `src/renderer/entities/entityProjection.ts`, `src/renderer/firstPerson/handPresentation.ts`, `src/renderer/materials.ts`, `src/renderer/meshGeometry.ts`, `src/renderer/perspective/perspectiveRenderer.ts`, `src/save/checkpoint.ts`, `src/sim/rng.ts`, `src/sim/state.ts`

## Mutant dispositions

Complete this section so every fingerprint in `evidence.json.actionable` is represented in `plan.json` with `remediate`, `equivalence-review`, or `blocked`.

## Ordered remediation units

For each unit document the behavioral contract, files, exact change intent, implementation sequence, acceptance criteria, ordinary verification, and guardian mutation target.

## Global verification

Document repository-sourced ordinary gates followed by independent mutation re-validation. State whether a configured-universe guardian run is required.

## Delivery boundary

Record whether commit/merge were requested, the authorization basis, and the repository policy source. The downstream executor—not this planner—performs authorized git/remote actions after verification.

## Blockers / unresolved decisions

A plan with unresolved blockers cannot be sealed.
