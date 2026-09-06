# Project Tarmin — Audio Direction

Grounded in `GOALS.md` and `docs/GAME_DESIGN.md` §4 (Resource Tracking). Audio's job in this project is not decoration — in the original, sound *was* information. That principle carries forward even where the presentation modernizes.

## Core Principle

**Sound communicates state; it does not merely accompany it.** Where a system in `docs/GAME_DESIGN.md` is audio-linked (health), the audio is load-bearing, not ambient flavor. Where a system was moved to a numeric readout (arrows, food), audio can still accompany the action (a nock, a bite) but is no longer the *only* channel carrying that information.

## Health: Audio + Visual (Load-Bearing)

- Health depletion is communicated through the visual `health-bar-fill` (oxide, per `DESIGN.md`) **and** a distinct audio cue that escalates as health drops — e.g. a heartbeat or tone whose rate/pitch shifts with remaining health.
- This audio cue should be perceivable without looking at the HUD, since the design intent (per `DESIGN.md`) is that "no numeric-only readout should be the sole vitality signal." Audio is not redundant with the bar — it's the channel that works when the player's eyes are on the corridor, not the HUD.
- The cue should scale continuously (or in clear discrete steps) rather than firing only at a single "low health" threshold, so it functions as ongoing feedback, not a one-time alarm.

The first implementation uses a native Web Audio sine pulse as a presentation
adapter. It stays silent at full vitality, becomes faster/higher/louder as
health falls, suspends while paused, and is disposed at run end. Unsupported
audio contexts fail closed; no simulation state or RNG is involved.

## Ambient Soundscape: Sparse, No Music

- No continuous musical score. Music would work against the "solitary ritual" identity `DESIGN.md` and `GOALS.md` both describe.
- Sparse ambience is permitted and encouraged: environmental sound (distant drips, stone settling, wind through corridors) that reinforces isolation without filling silence. Silence itself is a design tool here, not an absence to be fixed.
- Discrete, purposeful stingers (item pickup, monster encounter, door mechanics) should read as event-driven punctuation against a mostly-quiet baseline — loud consequence against a sparse backdrop, the same contract `DESIGN.md` establishes visually with its single-gold-accent rule.

## Resource Sounds (Arrows, Food): Accompaniment, Not the Sole Channel

Now that counts are shown numerically (`docs/GAME_DESIGN.md` §4), the original's click-counting ritual is no longer strictly necessary for information — but a light sound accompanying the action (nocking an arrow, eating) preserves tactile feedback without forcing mental bookkeeping. This is deliberately a smaller role than the original's arrow-click mechanic, which was pure information delivery; here it's texture.

The first resource-action pass adds short native Web Audio punctuation for attack
attempts and item use. These cues are event-driven presentation adapters: they do
not consume RNG, alter command results, or become the sole resource readout.

The event punctuation pass adds a lower, longer encounter cue when a monster
bars the passage and a brief higher pickup cue when loot enters the ring. Both
are driven by existing simulation events and are silent outside an active run.

## Open Item

Whether any additional systems beyond health warrant a dedicated audio cue (e.g. proximity dread cues for nearby monsters) is not yet decided and isn't blocking v1 — revisit once `docs/GAME_DESIGN.md` §6 (Controls & Hidden Mastery) is resolved, since some of those mechanics may turn out to be audio-gated in the original.
