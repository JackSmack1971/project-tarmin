# Goal record

## Goal and observable outcome

Replace fixture-style encounter spawning with a persistent authoritative dungeon-world model. Monster instances retain stable identity, definition, position, health, and defeated state; world items retain their dungeon location until collected. Movement and combat query that world state, so defeated monsters never respawn and surviving monsters retain health across retreat/re-entry.

## Status

Active — implementation and delivery remain incomplete.

## Owner / resumption note

Continue from the current `main` worktree. Read this record, `harness/progress-log.md`, and `harness/build/persistent-dungeon-world-acceptance.md` before each iteration.

## Constraints and authorization

Repository-local implementation, tests, documentation, browser verification, feature branch, commit, PR creation, and merge to `main` are explicitly in scope. Preserve TypeScript, Vite, Phaser, framework-independent deterministic serializable simulation, integer cardinal grid movement, turn-based combat, inventory behavior, and current rendering/input architecture. External delivery actions must be verified at each boundary.

## Non-goals

No multi-floor progression, procedural dungeon generation, save migrations, final art/audio, sophisticated roaming AI, or large content expansion.

## Acceptance criteria and required evidence

See `harness/build/persistent-dungeon-world-acceptance.md`. All applicable rows must pass, including focused persistence tests, existing simulation regressions, project checks, browser verification required by `docs/TESTING_STRATEGY.md`, current documentation, and verified merged-main state.

## Stopping conditions

All acceptance rows have independent evidence; no introduced or inconclusive failure remains; documentation and build log are current; the focused branch has been committed, PR'd to `main`, merged after required checks, and the merged result is verified on local `main`.

## State location and tracking decision

The repository's existing tracked `harness/goal-record.md`, `harness/progress-log.md`, and `harness/build-log.md` are the durable state convention. No new private state or credentials are stored.

## Baseline

- Repository revision: clean `main`, matching `origin/main` before this goal.
- Validation: baseline commands and exact results are recorded in the progress log and build log.
- Pre-existing failures: routed docs `docs/GAME_DESIGN.md`, `docs/CONTENT_MODEL.md`, and `docs/DETERMINISM_AND_SAVE.md` are absent; `npm run test:browser` is a documented manual-browser status notice.

## Facts

- `GameState.encounter` is the only monster runtime state and is synthesized by coordinate-specific `encounterAt()`.
- `GameState.loot` is an unlocated string list; `ItemInstance.position` exists but initial/world loot does not use it.
- `MainScene` projects only the active encounter, so presentation can continue consuming a compatible authoritative state shape.

## Assumptions

- The existing one-floor fixture map remains the content scope; the guarded tile becomes one explicit world monster instance.
- Existing `encounter` remains as the active-combat projection for compatibility with current rendering/input code, while the persistent world collection is authoritative.

## Unknowns ranked by consequence

1. Exact state shape and transition synchronization between persistent monsters and active encounter — high consequence; resolve through focused simulation tests and serializable round-trip checks.
2. Loot representation needed to preserve current pickup/drop behavior while adding location — medium consequence; resolve through focused state-transition tests.
3. Browser-facing changes required by the compatible state projection — low consequence; resolve with a fresh Chromium flow after simulation work.

## Evidence index

- `harness/build/persistent-dungeon-world-acceptance.md`
- `harness/progress-log.md`
- `harness/build-log.md`
- relevant source and test files under `src/sim/`, `src/content/`, and `src/game/`

## Open blockers

None known before baseline execution. Remote PR/merge capability and required checks must be revalidated before delivery.

## Last verified iteration

Goal initialization and repository inspection; no implementation verification yet.

## Next action and why it is highest value

Run the baseline test/typecheck/lint/browser-status/build commands, then implement the smallest persistent state transition with focused tests. Baseline distinguishes existing failures from introduced failures before the authoritative model changes.
