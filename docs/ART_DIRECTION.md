# Art direction

Project Tarmin uses original, low-resolution pixel-art surfaces with restrained olive stone, warm timber/iron, and near-black apertures. The dungeon should feel compressed, old, and materially legible at a glance; surface marks support portal readability instead of competing with it.

The production atlas is a padded 136×68 PNG at `public/assets/dungeon/dungeon-surfaces.png`, described by `src/renderer/assets/dungeonAtlas.ts`. It contains eight canonical 32×32 Project Tarmin regions: crypt stone, burial masonry, basalt-like stone, timber door, iron door, floor stone, ceiling stone, and darkness. Its stone/wood/metal inputs are transformed from the approved CC0 Tiny Texture Pack 2 through the project's semantic palettes, contrast, tile seams, and 16px-to-32px pixel grammar; `project-tarmin-asset-source-downloader/DUNGEON_ATLAS_DERIVATION.json` records the exact lineage. These names describe material roles, not copied game assets, maps, text, logos, or branding.

Material identity is data-driven and renderer-neutral. The production Phaser adapter samples each material’s matching atlas region on Mesh2D surfaces, with nearest-neighbor sampling and depth tinting preserving the deliberately low-resolution pixel language as the projected quads scale. Doors use their own timber/iron swatches and a restrained outline; openings use the darkness swatch. Do not add detail that obscures depth, doors, openings, or the HUD.

Architectural features use a separate transparent presentation asset: a harmonized
low-resolution stone archway derived from the approved Old School Dungeon Crawler
Pack brick-door source. It frames visible openings only; closed iron doors remain
opaque, semantic `iron-door` blockers and take visual priority over decoration.

Wall sconces are a second sparse architectural presentation feature. The promoted
64×64 `torch-sconce.png` derivative is used only on deterministic visible side-wall
anchors, with the compact four-frame `torch-flame.png` sheet layered above it. The
fixture remains subdued and small enough that near material, blocker edges, and deep
apertures retain priority.

The first-person embodiment uses `public/assets/first-person/fp-hands-empty.png`,
a 4x nearest-neighbor palette harmonization of the approved Lo Fi First Person
Hand source. It is a baseline empty-hands silhouette, not a torch or weapon. The
Fantasy FPS Hands source is pose-language reference only. Hands render above world
geometry and fog but remain below the HTML HUD and are sized to leave portal,
encounter, and interaction-critical information readable.

## Portal composition

The first-person frame is deliberately claustrophobic and slightly irregular. Near geometry should feel large enough to press against the edges of the view; the first major portal is the dominant landmark, while successive portals compress aggressively toward a small, dark aperture. The normalized frame sequence is deterministic but includes restrained horizontal drift and a low, uneven horizon so corridors, turns, side walls, and blockers do not resemble a mathematically tidy tunnel. Keep the viewport large within the logical surface while preserving the shell’s header and footer lanes. Distance attenuation is part of the composition: near materials remain legible, middle materials recede, and far materials fall toward near-black silhouette.

## Entity silhouettes

State-backed entities use original low-resolution pixel art with crisp nearest-neighbor sampling. The authored Ashbound Warden sheet at `public/assets/entities/ashbound-warden.svg` is a two-frame 32×48-per-frame silhouette: an ash skull and layered iron armor, ember-orange eyes and axe accents, split greaves, and a near-black outline. The two stances shift the weapon from raised to lowered and preserve deliberate black-space gaps between limbs. `project-tarmin-asset-source-downloader/WARDEN_ASSET_DERIVATION.json` records that the Doomgeon creature is reference-only and contributes no runtime pixels or geometry. Near encounters may occupy a strong portion of the first portal; distance scaling must make farther entities smaller and dimmer without reducing them to an unreadable speck. Animation is a subtle alternating stance, never a gameplay timer or combat signal. Keep silhouettes subordinate to portal boundaries, blocker edges, and the combat HUD.

## Atmosphere and lighting pass

The presentation stack is layered as textured material, deterministic depth tint,
a restrained warm torch pool, state-backed entities, localized edge fog, then
static WebGL color grading and vignette. The torch pool is cosmetic and must not
expand canonical visibility or reveal geometry that `projectDungeon()` did not
emit. Fog and vignette compress attention toward the playable center without
covering entity silhouettes, blocker boundaries, or HUD text. Effects are static
with respect to frame time; reduced motion changes only transition timing.

Avoid animated noise, strong bloom, photorealistic falloff, or filters that flatten
the material palette. Near stone must retain readable texture and silhouette
contrast, while distant openings approach near-black without losing navigation
landmarks.

The palette is semantic and shared by the atlas adapter and atmosphere pass;
torch warmth is a palette token rather than a second ad hoc color. Atlas UVs use
an inset around each authored region, which also has a copied one-pixel gutter,
so neighboring pixel marks cannot bleed into projected surfaces.

## Interface hierarchy

The dungeon is the visual subject. A warm parchment/olive interface sits at the
edges in restrained translucent panels, leaving the central portal and its
silhouettes unobstructed. Hand slots, vitality, and the ring use simple original
pixel-era motifs—thin rules, compact labels, and a single ember/gold accent—so
they feel like one instrument panel rather than debug annotations. Combat status
is a small threat readout that supports the visible entity; it must not become a
large health-bar-first battle screen. Menu and pause panels reuse the same
materials and focus treatment, establishing a single interface language across
all states.

## Source gathering

Candidate source packs are gathered and tracked through `project-tarmin-asset-source-downloader/`. Its downloaded archives are staging/reference material only; runtime art must remain original or appropriately licensed and must be reviewed before promotion into `public/`. Keep source URLs, creators, licenses, and intended uses synchronized in the downloader manifests and license notes.

The interface uses a restrained sliced border language derived from the approved
CC0 source packs: small iron/bronze corners and edges, a thin divider, and a
low-alpha stone texture. These primitives are shared by HUD cards and modal
panels; no complete source frame or glow is used, and the portal remains the
visual subject.
