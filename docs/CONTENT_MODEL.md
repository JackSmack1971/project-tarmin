# Content and world-state model

Content definitions in `src/content/` are immutable registries addressed by
stable IDs. Runtime state in `src/sim/state.ts` stores explicit monster and
item instances that reference those definitions.

Monster instances are authoritative world records: `id`, `definitionId`,
integer `position`, current `health`, and `defeated`. A combat encounter is a
temporary active view of one such record. Uncollected world items have
`location: "world"` and an integer `position`; their IDs are listed in `loot`
until pickup, then their location changes to `ring` and their world position is
removed. Dropped items use the player's current position.

The one-floor MVP contains seven fixed world instances: the Ashbound Warden at
`(2, 1)`, three Glass Mirelings at `(4, 1)`, `(5, 2)`, and `(5, 3)`, and three
Gloam Scavengers at `(4, 4)`, `(5, 4)`, and `(3, 5)`. The east branch is fixed
map content, not generated at runtime. The registry contains six useful item
definitions: two weapons, two defenses, one consumable, and the objective
treasure. The starting ring remains the Ember Pike and Moss Tonic; enemy loot
can add the Rimeglass Knife, Ashen Mail, Moss Tonic, or Star-Forged Seal.

Loot tables are selected with the canonical seeded RNG and weighted entries.
The Warden's table contains only the Star-Forged Seal so the existing objective
route remains reliable. This is still a fixed one-floor slice, not procedural
dungeon generation or multi-floor progression.
