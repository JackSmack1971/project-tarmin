# Architecture

Phase 1 establishes one boundary: `src/sim/` owns serializable authoritative state and pure command transitions; `src/game/` adapts state into Phaser presentation and forwards input as explicit commands. Phase 2 keeps combat in that same simulation boundary: encounters are state, and attack/retreat are commands. The simulation must not import Phaser or call `Math.random()`.
