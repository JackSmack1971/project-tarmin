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
The objective state raises `rulesVersion` to `3`. This MVP does not add save
persistence or migrations; any future persisted saves must add an explicit
migration path for this schema.
