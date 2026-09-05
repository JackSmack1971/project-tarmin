# Determinism and save-state contract

Authoritative results are determined by the initial canonical state, seed/RNG
state, content/rules version, and ordered commands. Monster health/defeat and
world-item positions are part of that canonical state, so retreat, re-entry,
defeat, and pickup remain deterministic and survive JSON serialization.

The simulation never calls `Math.random()` and remains framework-independent.
This goal keeps `rulesVersion` at `2` and does not add save migrations; future
schema changes must introduce an explicit version and migration path.
