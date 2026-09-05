# Art direction

Project Tarmin uses original, low-resolution pixel-art surfaces with restrained olive stone, warm timber/iron, and near-black apertures. The dungeon should feel compressed, old, and materially legible at a glance; surface marks support portal readability instead of competing with it.

The first atlas is an 8×8 swatch strip in `public/assets/dungeon/dungeon-surfaces.svg`, described by `src/renderer/assets/dungeonAtlas.ts`. It contains original crypt stone, burial masonry, basalt-like stone, timber door, iron door, floor stone, ceiling stone, and darkness regions. These names describe material roles, not copied game assets, maps, text, logos, or branding.

Material identity is data-driven and renderer-neutral. The production Phaser adapter samples each material’s matching atlas region on Mesh2D surfaces, with nearest-neighbor sampling and depth tinting preserving the deliberately low-resolution pixel language as the projected quads scale. Doors use their own timber/iron swatches and a restrained outline; openings use the darkness swatch. Do not add detail that obscures depth, doors, openings, or the HUD.

## Portal composition

The first-person frame is deliberately claustrophobic and slightly irregular. Near geometry should feel large enough to press against the edges of the view; the first major portal is the dominant landmark, while successive portals compress aggressively toward a small, dark aperture. The normalized frame sequence is deterministic but includes restrained horizontal drift and a low, uneven horizon so corridors, turns, side walls, and blockers do not resemble a mathematically tidy tunnel. Keep the viewport large within the logical surface while preserving the shell’s header and footer lanes. Distance attenuation is part of the composition: near materials remain legible, middle materials recede, and far materials fall toward near-black silhouette.

## Entity silhouettes

State-backed entities use original low-resolution pixel art with crisp nearest-neighbor sampling. The Ashbound Warden sheet is a compact two-frame silhouette: ash-gray skull and armor, ember-orange eyes and axe accents, and near-black outlines that remain readable against compressed portal materials. Near encounters may occupy a strong portion of the first portal; distance scaling must make farther entities smaller and dimmer without reducing them to an unreadable speck. Animation is a subtle alternating stance, never a gameplay timer or combat signal. Keep silhouettes subordinate to portal boundaries, blocker edges, and the combat HUD.
