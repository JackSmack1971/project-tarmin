# Project Tarmin — Goals

## Intent

Project Tarmin is a **faithful recreation** of *Treasure of Tarmin* (Intellivision, 1981) for the browser, built on modern web/WebGL technology. "Faithful" here means faithful to the *ritual* the original produced — solitary first-person dungeon dread, procedural unpredictability, and real stakes on every decision — not faithful to every incidental limitation of 1981 hardware or every original interface choice. Where a mechanic *was* the game (procedural mazes, risk-on-pickup, permadeath, physical projectile combat), we reproduce it. Where a mechanic was a hardware workaround (audio-only inventory counts, for example), we're free to modernize the presentation as long as the underlying tension survives.

This project is a solo effort, targeting browser/WebGL only for v1. Scope decisions below exist to keep a one-person project finishable — every "yes" here is a "no" to something else.

## v1 Scope Decisions

| Mechanic | Decision | Rationale |
|---|---|---|
| Save system | Checkpoint saves allowed mid-run | Solo-dev, browser context makes 5-hour uninterrupted sessions impractical; the ritual survives if death still costs the run. |
| Permadeath | Retained on death | This is the stakes mechanic the retrospective identifies as core to why the original mattered — a checkpoint is for pausing life, not undoing a mistake. |
| Inventory readouts (arrows, food) | Shown numerically on-screen | Consistent with `DESIGN.md`'s existing `stat-numeric`/tabular-numeral tokens. Audio-only counting was a hardware workaround (no dedicated HUD display existed), not a deliberate tension mechanic — unlike health, which stays audio+visual per `DESIGN.md`. |
| Maze generation | Reimplement the original's actual generation algorithm | Preserves the exact texture of "unpredictable but fair" that the original tuned; a new generator risks feeling different without anyone being able to say why. |
| Combat physics | Real-time arrow flight, wall ricochet, first-person aiming | Identified in the retrospective as a defining "this felt physical, not menu-based" element. Non-negotiable for v1. |
| Mystery item identification | Use-to-identify, with real negative outcomes (bombs, stat loss) | This is the gambling-loop-inside-an-RPG-loop the retrospective calls out as the addictive core. Diluting the downside removes the tension. |

## Open Tension Requiring Confirmation

**Checkpoint + permadeath interaction is not yet fully specified.** Current working assumption: a checkpoint lets you close the browser and resume later, but death deletes the checkpoint and ends the run — the run itself remains a single, uninterruptible stake even if play sessions are chopped up. If instead a checkpoint should be reloadable *after* death, permadeath becomes cosmetic and this needs to be renegotiated before `GAME_DESIGN.md` is written, since it changes what "risk" means for every other system. Logged in `docs/OPEN_QUESTIONS.md`.

## Non-Goals for v1

- Multiplayer or co-op of any kind
- Native desktop or mobile builds (browser/WebGL only)
- New mazes, monsters, or items beyond the original's roster (that's a v2+ conversation, not v1)
- A generic "retro dungeon crawler" — this is Tarmin specifically, not a genre exercise

## Success Criteria

v1 succeeds if someone who played the original Intellivision cartridge sits down with this browser version, alone, lights off, and recognizes the same specific dread — not "a game like it," but the thing itself, rebuilt.

## Downstream Documents

This document gates:
- `docs/GAME_DESIGN.md` — translates these decisions into concrete rules and systems
- `docs/AUDIO_DIRECTION.md` — depends on the audio/HUD split decided above
- `docs/IP_AND_BRANDING.md` — depends on how closely this project stays to the original's identity
- `PLANS.md` — sequencing depends on scope locked here
