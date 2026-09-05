# Phase 05 combat, inventory, and content context

- Content uses stable IDs in `src/content`; mutable state stores compact item and monster instances with definition IDs.
- Combat is one active directly encountered monster. A player attack validates the selected hand, consumes accuracy then damage RNG rolls, applies damage, and—if the monster survives—resolves retaliation in the same command. Presentation timing is irrelevant.
- The initial weapon is the left-hand Ember Pike. `attackLeft` and `attackRight` are authoritative and an empty/invalid hand is a normal ignored action. The compatibility `attack` command means left-hand attack.
- RNG is serializable `rngState` using xorshift32. Combat and loot use it; no authoritative module calls `Math.random()`.
- Ring capacity is six. Ring ordering is stable, Q/E rotate with wraparound, and consumed items are removed with selection clamped modulo the remaining length. Equipped items remain in the ring and equipment slots reference the same runtime item ID.
- Defeated monsters produce deterministic world loot; P picks it up when capacity allows. R uses a selected consumable, Z/X equip a selected hand-usable item, and Backspace drops a non-equipped selected item.
- Runtime IDs are deterministic (`monster-warden-1`, `item-...-1`, and turn-derived loot IDs) for this fixture slice.
- Phaser renders the active encounter as a presentation silhouette and reads state; simulation retains combat, inventory, ownership, and validity rules.
- Deferred: multi-floor progression, save migrations/persistence, final balance/audio/art, full game-over UX, generalized targeting/AI, and large content production.
