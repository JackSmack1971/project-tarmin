# Project Tarmin — Plans

Grounded in `GOALS.md` and `docs/GAME_DESIGN.md`. Sequencing approach: **vertical slice first** — one full maze floor with every core system working end to end, before expanding breadth (more floors, full monster/item roster, polish).

## Why Vertical Slice, Given Solo Dev

For a one-person project, breadth-first work (e.g. "finish all combat, then all audio, then all UI") risks months of work before anything is actually *playable* enough to tell whether the core loop is fun — and this project's whole premise rests on a specific felt experience (`GOALS.md`'s success criteria), which can only be evaluated by playing it, not by reviewing systems in isolation.

## Slice 1 — Minimum Playable Floor

One maze floor, playable start to finish, containing:

- [ ] First-person grid movement (`docs/GAME_DESIGN.md` §1)
- [ ] One instance of procedural generation — **blocked** until the original algorithm is sourced/reverse-engineered (`docs/GAME_DESIGN.md` §2). Use a placeholder generator for early movement/rendering work only; do not treat placeholder output as representative of final feel.
- [ ] Basic item pickup + use-to-identify with at least one positive and one negative outcome (`docs/GAME_DESIGN.md` §3)
- [ ] Health as audio+visual (`docs/AUDIO_DIRECTION.md`), arrows/food as numeric HUD (`DESIGN.md` tokens)
- [ ] Minimal combat: fire an arrow, hit a wall or a monster, take damage — **using placeholder tunable numbers**, not final values, since combat math is unresolved (`docs/OPEN_QUESTIONS.md` #3)
- [ ] One checkpoint save, one permadeath scenario, confirming the interaction from `docs/OPEN_QUESTIONS.md` #1 actually feels right in practice, not just on paper

**Slice 1 exit criteria:** you can walk into the floor, encounter risk, make a mistake, and lose the run — and it feels like something, even with placeholder numbers and only core controls.

## Slice 2 — Depth and Breadth

Only after Slice 1 is played and evaluated against `GOALS.md`'s success criteria:

- [ ] Expand to the full original maze-generation algorithm (once sourced)
- [ ] Full monster and item roster
- [ ] Control audit completed, expanded control scheme implemented (`docs/OPEN_QUESTIONS.md` #2)
- [ ] Combat numbers finalized from research or a deliberate "retuned" decision (`docs/OPEN_QUESTIONS.md` #3)
- [ ] Ambient audio pass beyond the health cue (`docs/AUDIO_DIRECTION.md`)
- [ ] Multiple floors, matching the original's minimum-twelve-level structure

## Slice 3 — Public Release Readiness

- [ ] Public-facing name finalized, replacing the "Project Tarmin" placeholder (`docs/IP_AND_BRANDING.md`)
- [ ] Legal/precedent review obtained (`docs/IP_AND_BRANDING.md`)
- [ ] Full playtest of a complete run (multi-hour, matching original scale per `GOALS.md`)

## Explicit Non-Sequencing Note

This is not a committed calendar/deadline plan — it's an ordering of dependencies for a solo developer. Revisit and reorder as slices reveal what's actually hard versus what looked hard on paper.
