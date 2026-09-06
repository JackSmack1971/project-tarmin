# Determinism and save-state contract

Authoritative results are determined by the initial canonical state, seed/RNG
state, content/rules version, and ordered commands. Monster health/defeat and
world-item positions are part of that canonical state, so retreat, re-entry,
defeat, and pickup remain deterministic and survive JSON serialization.

The fixed one-floor population is seeded content: seven monster instances use
stable IDs and positions, and loot tables use weighted entries selected only by
the simulation RNG. Presentation timing and billboard assets cannot alter
which instance or item is selected.

`runStatus` is also canonical. Defeat sets health to zero, clears the active
encounter, emits terminal events, and rejects later commands without mutating
state. The canonical objective records Star-Forged Seal possession, the fixed
exit at `(2,4)`, and completion. `completeRun()` rejects any call unless the
player is at that exit and possesses the seal; otherwise it records victory.
`restartRun(seed)` constructs a clean initial state, so same-seed restarts are
equal to a fresh run and new seeds produce a distinct seeded run.

The simulation never calls `Math.random()` and remains framework-independent.
The objective state raises `rulesVersion` to `3`. The browser checkpoint uses a
separate `schemaVersion: 1` envelope around the canonical state. It is written
after each playing command, loaded only when the envelope and required state
shape are valid, and discarded for unsupported or malformed data. Defeat and
victory clear the checkpoint; this implements the current working assumption in
`docs/OPEN_QUESTIONS.md` that a checkpoint bridges sessions but does not survive
the end of a run. Future schema changes require an explicit migration path.
