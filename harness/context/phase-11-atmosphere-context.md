# Phase 11 atmosphere context

The authoritative visibility and geometry path is unchanged: `projectDungeon()`
still decides what exists in the first-person view. The presentation pass in
`MainScene` layers Mesh2D materials, a warm low-alpha torch pool, state-backed
billboard entities, localized edge fog, and static Phaser 4 camera
color/vignette filters. No simulation module imports Phaser, uses `Math.random()`,
or receives frame timing. Browser evidence compares equivalent fixture and
encounter states at 1280×720 and records console output.
