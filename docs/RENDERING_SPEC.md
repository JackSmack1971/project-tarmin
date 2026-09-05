# Rendering specification

The game uses a pseudo-3D first-person portal projection. `src/renderer/perspective/` produces a renderer-neutral `SceneDescription` from simulation state; `src/game/MainScene.ts` maps that description into Phaser graphics.

Each scene primitive has two deliberately separate concerns:

- `geometry`: integer-grid source cell, normalized depth/surface, and normalized quad;
- presentation metadata: visible cell kind, material identity, depth-derived light level, and a stable variation selector.

`projectDungeon()` remains the spatial source of truth. It emits far-to-near portal intervals and stops at the nearest opaque wall or closed door. It must not import Phaser, call `Math.random()`, mutate simulation state, or depend on frame timing. `primitiveSignature()` is a compact deterministic diagnostic for geometry and metadata regression tests.

The same projection returns a presentation-only `features` layer. `ProjectedFeature`
currently contains only stone archways, whose quads reuse the already-visible portal
frame for passage/open-door cells. Features are emitted only before the nearest opaque
wall or closed door; they do not inspect hidden cells, add `MaterialId` values, or
create spatial/gameplay state.

Material IDs are stable contracts, not artwork. The data-only material registry points to padded canonical 32×32 regions in the original Project Tarmin atlas at `public/assets/dungeon/dungeon-surfaces.png`. The production Phaser adapter loads that atlas once and renders every dungeon surface through a Mesh2D quad composed of two textured triangles. The four projected corners receive the four inset atlas-region UV corners, so the material follows the existing portal projection without introducing a second spatial model. Depth light is presentation-only Mesh2D tinting; it does not alter geometry or simulation. Variation is derived from seed, floor, source cell, and surface through a stable hash.

Open passages use the darkness swatch, while closed doors use the deterministic timber/iron material identity and retain a boundary stroke for immediate blocker readability. Mesh2D uses nearest-neighbor pixel-art sampling through the game-wide `pixelArt` configuration. Graphics remains for borders and the opt-in perspective debug overlay only; production dungeon surfaces are not flat fill polygons.

The production renderer is Phaser 4.2.1 with explicit `Phaser.WEBGL`; normalized portal geometry is scaled into the logical 1280×720 presentation surface. The portal frames are intentionally art-directed rather than evenly interpolated: the first depth occupies most of the viewport, later depths contract sharply, and small normalized offsets keep the composition from reading as a clean centered tunnel. The viewport is inset 72 px horizontally and vertically in the logical surface, with a 140 px lower shell lane reserved for controls and feedback. Depth light levels are deterministic `[1.00, 0.68, 0.36, 0.14]`, making the far frame approach silhouette while retaining enough structure for navigation. Browser verification must confirm WebGL and representative corridor, turn/opening, blocker, and door states.

## State-backed entity billboards

`src/renderer/entities/entityProjection.ts` projects presentation sources into the same discrete forward-depth model as the portal frames. A source carries a stable runtime ID, content definition ID, presentation ID, entity kind, and integer grid position; the projection derives depth, lateral placement, normalized billboard quad, and depth light without mutating state. `projectEntities()` filters sources outside the forward view and sources at or beyond the nearest opaque wall or closed door, then sorts surviving billboards far-to-near with a stable ID tie-breaker.

The active encounter is the first consumer: `MainScene` adapts `GameState.encounter` into a monster source and renders the resulting `EntityBillboard` as a perspective-scaled pixel-art sprite. The same contract intentionally supports future monsters, items, treasure, and environmental features when canonical state supplies their positions; it does not create gameplay entities. `billboardFrameAt()` selects a restrained two-frame animation from elapsed presentation time only; timing is never included in `GameState`, RNG, commands, events, or entity geometry.

## WebGL atmosphere pass

`MainScene` applies the cosmetic stack after projection: Mesh2D material textures
receive depth tint, a low-alpha warm torch pool is drawn inside the portal,
entities are rendered from canonical encounter sources, and a localized edge-fog
layer follows. The main camera then applies a static color-matrix grade and
restrained vignette through Phaser 4 WebGL filters. These effects do not modify
`GameState`, visibility cells, RNG, commands, encounters, or entity projection.
No filter is time-driven; `update()` is used only for the presentation-only
billboard frame selector. Reduced motion keeps the static atmosphere and only
shortens the existing transition veil.

The material UV adapter resolves atlas coordinates through the material registry,
then applies a quarter-pixel inset to all four corners. The 136×68 atlas also
copies a one-pixel gutter around each 32×32 region, preventing bleeding even at
the boundary. This keeps material IDs and atlas coordinates from drifting apart
as the authored atlas evolves. Phaser
display objects are rebuilt only after a state or mode change; the frame loop
updates billboard crops only.

Fog and vignette are compositional treatments, not a second visibility system.
They must preserve portal boundaries, closed-door outlines, active entity
silhouettes, and interaction-critical HUD readability. The default stack stays
small and low-cost: no blur, animated noise, or full-screen glow.
