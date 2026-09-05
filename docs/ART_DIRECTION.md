# Art direction

Project Tarmin uses original, low-resolution pixel-art surfaces with restrained olive stone, warm timber/iron, and near-black apertures. The dungeon should feel compressed, old, and materially legible at a glance; surface marks support portal readability instead of competing with it.

The first atlas is an 8×8 swatch strip in `public/assets/dungeon/dungeon-surfaces.svg`, described by `src/renderer/assets/dungeonAtlas.ts`. It contains original crypt stone, burial masonry, basalt-like stone, timber door, iron door, floor stone, ceiling stone, and darkness regions. These names describe material roles, not copied game assets, maps, text, logos, or branding.

Material identity is data-driven and renderer-neutral. The current Phaser adapter uses each material’s fallback color, light level, and geometry; a future texture pass may sample the matching atlas region without changing simulation or portal topology. Do not add detail that obscures depth, doors, openings, or the HUD.
