# Project Tarmin — Game Design

Grounded in `GOALS.md`. Where a decision is still pending, this document says so explicitly and points to `docs/OPEN_QUESTIONS.md` rather than inventing a placeholder number or rule — a wrong guess here is more expensive to unwind later than an honest gap now.

## 1. Perspective & Movement

First-person view of the maze corridors, grid-based movement (no free-look 3D navigation) — the original's defining break from top-down RPGs of its era. The player is never represented on-screen as a sprite; the camera *is* the player.

## 2. Procedural Generation

Reimplement the original's actual maze-generation algorithm (per `GOALS.md`), not a new generator approximating its feel. This preserves the specific texture of "unpredictable but fair" the original was tuned to produce.

**Prerequisite:** the original algorithm needs to be sourced or reverse-engineered before this system can be implemented — this is an implementation dependency, not an open design question, but flag it here since it blocks engineering work until resolved.

## 3. Item Identification & Risk

Items are found unidentified. Using an item is the only way to learn what it does:
- Potions and weapons may boost stats
- Treasure may boost score, contain a potion, **or** contain a bomb that damages war/spiritual stats — potentially fatal depending on the player's current strength

This is the core "gambling loop inside an RPG loop" the source retrospective identifies as the addictive mechanic. The downside must be real and sometimes fatal, or the tension collapses into a non-choice.

## 4. Resource Tracking (Audio + Visual Split)

Per `GOALS.md`:
- **Arrow and food counts:** shown numerically on-screen, using `DESIGN.md`'s existing `stat-numeric`/tabular-numeral tokens. This modernizes a hardware workaround (the original had no room for an on-screen counter) without removing any actual tension — knowing your exact arrow count doesn't reduce the risk of running out, it just removes tedious click-counting.
- **Health:** stays audio *and* visual per `DESIGN.md`'s existing health-bar spec — this one is deliberately **not** simplified to numbers-only, since audio-plus-depletion together are called out there as "the survival mechanic this game is built around."

## 5. Combat

Real-time projectile combat layered inside a turn-based dungeon-crawl structure:
- Arrows fire independent of movement (can shoot while retreating)
- Arrows can ricochet off walls, including back at the shooter
- Combat is visible and physical — you see the arrow travel and strike, not a menu roll

**Open:** exact damage/hit-chance/monster-stat numbers are not yet sourced. See `docs/OPEN_QUESTIONS.md` #3. Until resolved, combat systems should be built with tunable parameters rather than hardcoded original values.

## 6. Controls & Hidden Mastery

The original rewarded players who went beyond what the game told them — glance mechanics, door handling, and other non-obvious functions that weren't explained in-game.

**Open:** whether v1 reproduces the full original control depth or a streamlined subset is pending a control audit. See `docs/OPEN_QUESTIONS.md` #2. Until that audit exists, don't assume any specific control beyond core movement, aim/fire, and interact are in scope.

## 7. Visual Field

Per this round's decision: visuals are modernized (not a literal repeating-green-pattern recreation) but on-screen motion stays minimal — nothing moves in the environment except the player. `DESIGN.md`'s "sparse aesthetic, loud consequence" ethos already encodes this at the UI-chrome level; this section extends the same restraint to the dungeon environment itself, so the environment doesn't visually compete with `DESIGN.md`'s single-gold-accent rule.

## 8. Stakes & Progression

Checkpoint saves exist for session continuity; permadeath on death remains the stake (see `docs/OPEN_QUESTIONS.md` #1 for the unconfirmed edge case). A full run is understood to be a multi-hour investment, consistent with the original's minimum-twelve-level structure — this is not meant to be a 15-minute session game.

## Explicitly Out of Scope for v1

Per `GOALS.md`'s non-goals: multiplayer, native builds, new content beyond the original roster.
