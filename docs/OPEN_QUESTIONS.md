# Open Questions

Decisions surfaced during design discussion that are not yet resolved. Each entry needs an owner decision (or a research pass) before the documents that depend on it can be finalized. Remove an entry once it's resolved and fold the answer into the relevant doc — this file should stay short-lived, not become an archive.

## 1. Checkpoint saves vs. permadeath interaction

**Status:** Working assumption in place, not confirmed.**Question:** Does a checkpoint survive death (reloadable after dying — permadeath becomes cosmetic) or does death delete the checkpoint (run ends for good, checkpoint only bridges play sessions)?**Working assumption (`GOALS.md`):** Death deletes the checkpoint. The run is the stake; the checkpoint just lets you stop mid-run without losing progress *toward* that stake.**Why it matters:** Determines whether every other risk-based system (mystery items, combat, exploration) actually carries weight, or is safety-netted.**Resolves into:** `GOALS.md`, `docs/GAME_DESIGN.md`

## 2. Control depth — full keypad-equivalent vs. streamlined

**Status:** Needs a control audit before deciding.**Question:** Reproduce the original's full non-obvious control set (glance left/right, and whatever else the manual/keypad overlay exposed), or streamline to a modern subset?**Research needed:** Locate the original Intellivision manual and keypad overlay (or a verified transcription/emulator documentation) and produce a full control inventory before this can be decided — guessing at "what the manual described" risks inventing mechanics that never existed.**Why it matters:** Directly shapes `docs/GAME_DESIGN.md`'s control scheme section and the "rewarded mastery the manual didn't hand you" hook the retrospective calls out as a core appeal.**Resolves into:** `docs/GAME_DESIGN.md`

## 3. Combat math fidelity

**Status:** Needs source research before deciding.**Question:** Mirror the original's actual damage/hit-chance/monster-stat numbers, or keep the same shape of system with numbers retuned for modern pacing?**Research needed:** Original numbers aren't in this project's context — would need a verified source (manual, disassembly, or a reputable retrospective with cited figures) before "exact original numbers" is even achievable. If no reliable source exists, "same shape, retuned" may be the only realistic option by default.**Why it matters:** Affects difficulty curve, playtesting, and how literally "faithful recreation" can be interpreted for this specific system.**Resolves into:** `docs/GAME_DESIGN.md`

## 4. IP and branding — rename and legal review

**Status:** Stance decided (distinct name, open acknowledgment of inspiration; free public release intended). Two items remain outstanding.**Question:** (a) What is the actual public-facing project name, replacing the placeholder "Project Tarmin," which still contains the original trademark's distinctive term? (b) Has a legal review (or fan-precedent research) of the reimplementation approach been obtained ahead of public release?**Why it matters:** Gates the public release itself, not private development. See `docs/IP_AND_BRANDING.md` for the full framing — this is not something Claude can resolve or clear; it needs an actual decision/review from the owner.**Resolves into:** `docs/IP_AND_BRANDING.md`
