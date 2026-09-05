# Phase 03 perspective renderer context

- The active checkout uses `src/sim/state.ts` as its compact authoritative dungeon model and `src/game/portalProjection.ts` as the normalized projection-band definition. The requested Phase 02 files/spec are absent from this checkout; no replacement dungeon generator was introduced.
- `src/renderer/perspective/perspectiveRenderer.ts` is framework-independent. It consumes `GameState` and `visibleCellKind`, emits deterministic `RenderPrimitive` quads, and stops at the nearest opaque wall or closed door. It emits far-to-near order using the shared D0–D4 portal frames.
- Projection convention: normalized 0–1 screen coordinates, centered nested portal frames, logical 1280×720 Phaser canvas, FIT-scaled 16:9 shell. Phaser converts normalized points to the active bounded viewport.
- Doors are serializable state entries (`position`, `open`). Closed doors are opaque and block movement; open doors are traversable openings. Renderer code does not mutate state or inspect topology beyond the simulation's classification function.
- Presentation transitions use a centralized 140 ms Phaser veil and reject input while active. Authoritative position/facing update only through `applyCommand`; no interpolated coordinates are stored.
- `?perspectiveDebug=1` enables depth-frame/surface labels and player/primitive information. A read-only `window.__TARMIN_RENDERER__` getter exposes position, facing, visible depth, primitive descriptors, and transition state for development/browser inspection.
- Stable fixture URLs include `straight-corridor`, `wall-1/2/3`, side openings, intersections, `closed-door`, and `open-door`. Fixture visuals use procedural polygons and palette colors only.
- Deferred: final art/audio, lighting mechanics, combat/inventory presentation, reduced-motion settings UI, and migration of this compact model to the absent canonical Phase 02 module layout.
