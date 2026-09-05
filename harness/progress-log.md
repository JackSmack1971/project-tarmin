# Progress log

## Persistent dungeon-world iteration 1 — baseline and contract

- Action: read the pasted objective, inspected the clean `main` tree and current simulation/presentation contracts, reconciled the stale goal record, and created the persistent-world acceptance matrix.
- Observation: `encounterAt()` synthesizes the sole monster at `(2,1)`; `GameState.loot` is an unlocated string list; current rendering consumes the active encounter projection.
- Verification: repository status is clean on `main`; baseline command results are pending. Missing routed docs and the manual `test:browser` status are recorded as pre-existing gaps/conditions.
- Decision: implement a persistent monster collection and location-bearing world-item state while preserving the active encounter projection for the current renderer/input seam; no remote delivery action until local evidence passes.
- Blocker / failure classification: none.
- Next uncertainty: exact minimal state shape and synchronization rules for retreat, re-entry, defeat, and loot collection.

## Persistent dungeon-world iteration 2 — implementation and local verification

- Action: added canonical `monsters` state, world-positioned loot, synchronization between active combat and world records, focused persistence tests, and affected architecture/content/determinism/testing documentation.
- Observation: the focused suite passed 19 tests; the full suite passed 39 tests; typecheck, lint, browser-status, build, and diff checks passed. Chromium loaded the app and produced menu/corridor captures.
- Verification: tests prove stable identity, health persistence after retreat/re-entry, permanent defeat without respawn, location-bound loot, pickup ownership, and JSON serialization. Source scan found no coordinate encounter factory, Phaser import, or `Math.random()` in simulation.
- Decision: keep local implementation and documentation; do not claim browser-flow completion because the available browser endpoints could not exercise input-driven encounter/combat/defeat behavior.
- Blocker / failure classification: inconclusive/environmental browser automation only; local checks are passing.
- Next uncertainty: obtain a working browser automation endpoint, then verify the seeded encounter/combat/defeat flow before branch delivery.

## Persistent dungeon-world iteration 3 — browser verification

- Action: used a disposable Playwright Chromium runtime against the local Vite server to exercise the required presentation/input path, including defeat, pickup, and revisit.
- Observation: seed `7391` entered `monster-warden-1` with one entity; four Space attacks removed the encounter/entity and produced loot; `p` collected the loot; ArrowUp/ArrowDown/ArrowUp revisited `(2,1)` with `encounter:null`, `entities:[]`, and zero page/application errors.
- Verification: browser captures were written under `harness/evidence/persistent-world-browser-*.png`; the renderer state surface confirmed the expected before/after values at 1280×720.
- Decision: browser acceptance is passed; run the final project checks, commit the evidence record, and then proceed to PR merge verification.
- Blocker / failure classification: none.
- Next uncertainty: required check status and merged-main state after the PR merge.

## Entity-layer iteration 1 — baseline and acceptance reconciliation

- Action: read the pasted objective, inspected `main`, reconciled the stale goal record, and defined E1–E8 acceptance rows.
- Observation: textured portal rendering and canonical encounter state exist; active encounter presentation is a HUD ellipse with no perspective-aware entity projection, billboard contract, or entity disappearance rendering path.
- Verification: `git status --short --branch` is clean on `main`; current tests/docs confirm the prerequisite renderer is present. Missing `docs/GAME_DESIGN.md` and `docs/INPUT_AND_UI.md` are recorded as repository gaps; gameplay context is currently in `harness/context/phase-05-combat-inventory-content-context.md`.
- Decision: implement a pure renderer-neutral entity projection contract and a minimal Phaser billboard adapter using an original inline low-resolution sprite, then verify before any remote delivery action.
- Next uncertainty: exact depth/occlusion representation and Phaser-compatible billboard presentation seam.

## Entity-layer iteration 2 — delivery verification

- Action: committed the completed implementation, pushed `feature/entity-billboards`, opened PR #9 against `main`, and squash-merged it.
- Observation: PR #9 is merged; merge commit `9413b59c1b3ff6391ca5bc3128ca4d075125dccc` is the resolved tip of both local `main` and `origin/main`. No remote checks are configured.
- Verification: local tests, typecheck, lint, build, documented browser command, and standalone Chromium evidence all passed as recorded above; the merged tree contains the entity projection, art, docs, and acceptance artifacts.
- Decision: mark E8 and the goal complete.

## Iteration 1

- Action: scaffolded the first vertical slice and its acceptance matrix.
- Observation: implementation now spans pure simulation, Phaser adapter, and browser shell.
- Verification: dependency install recovered after cache refresh; tests, typecheck, build, static boundary scan, and browser inspection completed.

## Iteration 2

- Action: implemented the phase-2 combat vertical slice: guarded-tile encounter, deterministic attack exchange, defeat, retreat, and Phaser HUD controls.
- Observation: the encounter remains in authoritative serializable simulation state; presentation only dispatches commands and renders it.
- Verification: `npm test` 7 passed; `npm run typecheck`, `npm run lint`, and `npm run build` passed; boundary scan passed; browser interaction entered combat and defeated the guard with zero console errors. Screenshots: `phase-2-combat.png`, `phase-2-defeated.png`.

## Iteration 3

- Action: replaced scattered presentation colors with semantic dungeon palette tokens and added depth-based wall/terminus shading.
- Observation: the initial and combat states now read as restrained olive/stone dungeon masses with conspicuous rust and moss gameplay accents; no detailed textures were added.
- Verification: `npm test` 7 passed; typecheck and build passed; identical-state before/after captures are `palette-before.png`, `palette-after.png`, and `palette-after-combat.png`; browser console errors and warnings: 0.

## Iteration 4

- Action: reset the first-person projection around five normalized nested portal frames, with one explicit ceiling, floor, left-wall, and right-wall quad per visible cell interval; front walls terminate at the blocked cell's far frame and open side edges use dark trapezoids.
- Observation: fixed 1280×720 captures distinguish wall depths 1–3, show four corridor stages, and show black left/right apertures and distant termination. The existing ArrowUp combat probe still enters the Ashbound Warden encounter.
- Verification: projection and simulation tests pass (9 total); browser captured all ten requested fixture PNGs plus `portal-gameplay-combat.png`; browser console errors: 0.

## Phase 15 iteration 1 — local hardening and runtime evidence

- Action: reconciled the stale goal record to Phase 15, created `feature/phase-15-visual-pipeline`, centralized material atlas lookup and torch palette identity, hardened transient display cleanup and explicit billboard depth, and updated durable renderer/UI/art/testing documentation.
- Observation: baseline and post-change local checks remain green; fresh Chromium confirms WebGL, depth/door/opening fixtures, encounter presence and defeat disappearance, pause/reduced-motion behavior, and 1280/1600/1920 responsive scaling.
- Verification: fidelity ledger validator passed; typecheck, lint, 35 tests, test:browser status, build, diff check, and structural scans passed. Browser evidence is recorded in `harness/build/phase-15-visual-pipeline-acceptance.md`.
- Decision: local acceptance rows P15-1 through P15-8 are passed. Keep P15-9 pending until feature branch commit, PR, merge, and merged-main verification.

## Phase 15 iteration 2 — delivery closeout

- Action: committed the implementation as `6f77620`, pushed `feature/phase-15-visual-pipeline`, opened PR #17 targeting `main`, squash-merged it, and fast-forwarded local `main`.
- Observation: PR #17 is merged at `b9bb4ef7f13ba797ec0ac42f2cfa4ef7ea3b9e41`; local `main` and `origin/main` match and the worktree is clean. GitHub reports no configured remote checks.
- Verification: merged-main contains all Phase 15 code, docs, acceptance, and fidelity artifacts. P15-9 is passed.
- Decision: goal is complete after the closeout record is merged.
