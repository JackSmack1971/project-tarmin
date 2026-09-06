# Vision

## Mission

Project Tarmin exists to rebuild a very specific, almost-extinct kind of game experience: the solitary first-person dungeon ritual pioneered by *Treasure of Tarmin* (Intellivision, 1982) — a kid alone in a dark room, a torch, a maze that might hold a monster or might hold nothing, and no one else in the room to share the fear with.

This is not a nostalgia skin or a visual remaster. The goal is to rebuild the *mechanisms* that made the original addictive and atmospheric — first-person immersion, procedural unpredictability, genuine risk on every pickup, and an audio-driven survival mechanic that demands full attention — using a modern engine (browser/WebGL) whose extra rendering headroom is spent on restraint, not spectacle. As DESIGN.md states it: **"Sparse aesthetic, loud consequence."**

## Problem

Modern dungeon crawlers and roguelikes tend to externalize everything onto a HUD, offer generous or automatic saves, and reach for dense visual fidelity that leaves little room for a player's imagination to do any work. The particular tension the original produced — sitting in silence, manually counting audio clicks to know if you're about to starve or run out of arrows, unsure whether the item at your feet is treasure or a bomb — has essentially disappeared from the genre.

At the same time, retro remakes typically chase nostalgia through surface fan-service (updated sprites, modern menus, save-anywhere convenience) rather than through mechanical fidelity to what actually produced the original feeling. Neither the "generous modern crawler" nor the "cosmetic retro remake" approach reproduces the specific ritual this project is chasing.

## Target Users

- Players who remember *Treasure of Tarmin* (or its Aquarius sibling, *Minotaur*) and want the actual mechanical experience back, not a memory of it.
- Roguelike players who are drawn to procedural unpredictability and permanence, and who find heavily-instrumented modern UIs deadening rather than helpful.
- Players who want the *idea* of a solitary tabletop dungeon-crawl — loot, monsters, real stakes — without needing a group or a Dungeon Master.
- Players willing to opt into an intentionally sparse, low-information interface in exchange for atmosphere and tension.

This project is not designed for players who want party-based or social play, guided/tutorialized onboarding, or a visually dense modern RPG.

## Core Principles

- **First-person, not top-down.** The player *is* the adventurer inside the maze — never a sprite viewed from above. This is the single biggest lever on immersion.
- **Procedural unpredictability over hand-crafted content.** Mazes are generated, not memorized, so no run ever goes stale.
- **Real risk on every pickup.** Unidentified items are a genuine gamble — a boost or a bomb — never a safe, pre-labeled choice.
- **Audio as survival information, not decoration.** Arrow and food counts are conveyed through countable clicks, not a HUD readout. The player's ears are part of the interface.
- **Real-time physics inside a turn-based structure.** Combat (arrow trajectories, ricochets, backward fire) feels physical and skill-based even though the dungeon-crawl loop itself is turn-based.
- **Hidden mastery, not tutorialized systems.** Advanced mechanics (glancing, identification, door behavior) are discoverable, not spelled out — cracking the system is part of the reward.
- **Sparse aesthetic, loud consequence.** Visual noise stays minimal everywhere so that the one saturated signal in the entire interface — gold — hits with real weight. (See DESIGN.md's Accent Contract: gold is reserved exclusively for treasure, the Seal, and pickup feedback, and appears nowhere else.)
- **Permanence and real stakes.** No mid-run save-scumming. A descent is an investment, and dying costs something real.

## Product Direction

The near-term build target is a browser/WebGL dungeon crawler that renders the maze in a low-resolution, bitmap-console visual language (void-black stone, ember torchlight, brutalist non-rounded UI chrome, nearest-neighbor bitmap type) while implementing the original's core survival loop: procedural maze generation, item identification risk, real-time projectile combat, and the click-counted audio inventory system as the primary way players track arrows and food.

Over time, the direction is to deepen this same loop — additional maze themes/depths, an expanded bestiary, more identification variety, and possibly community-shared procedural seeds — always in service of the same ritual, not in place of it. Any new system should make the descent feel more consequential, atmospheric, or unpredictable; it should not add visual noise, on-screen bookkeeping, or convenience that would dilute the tension the whole project is built around.

## Non-Goals

- Not a multiplayer, co-op, or social game — the solitary experience is the point.
- Not a AAA-fidelity visual remake; sparse graphics are a deliberate feature, not a limitation to be engineered away.
- Not a tutorialized, quest-marked, or minimap-everything experience — the game should reward figuring things out.
- Not a CRT-terminal or illuminated-manuscript aesthetic — the identity is bitmap-console, and DESIGN.md explicitly rules out a dominant monospace-terminal treatment and ornate/blackletter fantasy type.
- Not a save-anywhere or save-scumming experience — permanence within a run is core to the stakes.
- Not a generic loot-fest with heavy VFX — the single-accent-color discipline (gold means treasure, nothing else) is intentional restraint, not a placeholder for "more juice later."

## Success Criteria

- A player alone, with the lights off and no ambient noise, experiences the same dread and anticipation the 1982 original produced.
- Every unidentified item pickup registers as a real dilemma — players hesitate before using or equipping it.
- The audio-based arrow/food tracking mechanic is functional and felt as immersive bookkeeping, not as an obscure or frustrating omission.
- A completed run reads back as a story ("I was one hallway from the Seal when—") rather than a session log of menu actions.
- The interface stays visually silent everywhere except for gold — players learn, without being told, that a glint of gold is the one thing in the frame worth their attention.

## Future Possibilities

- Additional dungeon biomes/floors that vary atmosphere (deeper void, different stone tones) without breaking the established color and shape language.
- An expanded bestiary and item-identification pool that widens the risk/reward space without adding a second accent color or on-screen crutch.
- Optional daily-seed or shareable-seed runs for community comparison, implemented in a way that never compromises no-mid-run-saving permanence.
- Accessibility accommodations (e.g., alternate feedback for the audio-counting mechanic) that preserve the underlying tension rather than replacing it with a visible counter by default.
