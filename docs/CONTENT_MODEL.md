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

The initial slice contains one Ashbound Warden world instance at `(2, 1)` and
the existing ring items. This is a fixed content slice, not procedural dungeon
generation or multi-floor progression.
