# Engineering — Version Control

## Workflow

Git, with **feature branches per system**, even for a solo developer. Rationale: this project's own `PLANS.md` sequences work by *system* (movement, generation, items, combat, audio) — branching per system keeps each in-progress mechanic isolated and bisectable, and makes it possible to shelve a half-finished system (e.g. if maze-generation research stalls per `docs/OPEN_QUESTIONS.md` #2/#3) without blocking unrelated work on `main`.

## Branch Naming

Tie branch names to the system they implement, matching `docs/GAME_DESIGN.md` section names where possible, so history stays legible against the design doc:

- `feature/movement-grid`
- `feature/maze-generation`
- `feature/item-identification`
- `feature/combat-projectiles`
- `feature/audio-health-cue`

## Merge Policy

- `main` should always reflect a state consistent with the current `PLANS.md` slice's exit criteria — not necessarily feature-complete, but not broken.
- Merge a feature branch to `main` once its slice-relevant checklist item in `PLANS.md` is satisfied, not necessarily once the system is "finished" in the abstract (a placeholder combat system with tunable numbers is mergeable for Slice 1; final combat numbers are not required until Slice 2).
- Delete branches after merge rather than leaving them long-lived — for a solo project, stale branches accumulate confusion faster than they provide value.

## Commit Messages

Reference the relevant design doc section when a commit implements or changes a specific decision, e.g.:

```
feat(combat): add wall ricochet for arrows (GAME_DESIGN.md §5)
```

This keeps the eventual git history queryable against the design documents — useful for a solo project revisited after time away, where "why did I build it this way" needs an answer faster than re-reading every doc from scratch.

## Tags

Tag the completion of each `PLANS.md` slice (`slice-1-complete`, `slice-2-complete`, etc.) so the playable-milestone history is easy to find and return to, independent of ordinary commit noise.

## Open Item

No CI/testing/build-automation policy is defined here yet — this document currently covers branching and commit hygiene only. If automated testing or build pipelines become relevant, that's a separate addition to this file, not a blocker for adopting the workflow above now.
