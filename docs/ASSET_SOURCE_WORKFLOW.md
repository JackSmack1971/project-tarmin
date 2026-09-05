# Asset source workflow

`project-tarmin-asset-source-downloader/` is the repository's approved source-gathering helper. Its checked-in PowerShell and shell scripts, manifests, expected-file list, README, and license notes define how the harness can obtain candidate source material without placing third-party archives in the browser build.

## Current use

The PowerShell workflow has been run for the current source set. The resulting local staging area is:

```text
project-tarmin-asset-source-downloader/downloads/
```

It contains the downloaded source packs and copied provenance files listed in `SOURCE_MANIFEST.json`, `SOURCE_MANIFEST.csv`, and `LICENSES.md`. The generated `downloads/` directory and `project-tarmin-source-packs.zip` are ignored because they are reproducible source staging artifacts, not distributable game content.

The current runtime art remains governed by the project art direction: authored or transformed project assets are copied into `public/` only after review. Raw third-party sources are references or processing inputs; they are not automatically runtime assets. Preserve the source URL, author, license, intended use, and any attribution/share-alike obligation in the manifest before using a new source.

## Dungeon surface atlas derivation

`public/assets/dungeon/dungeon-surfaces.png` is Project Tarmin's checked-in
production atlas, not a raw Tiny Texture Pack 2 file. Regenerate it from the
staged CC0 archive with:

```powershell
powershell -ExecutionPolicy Bypass -File .\derive_dungeon_atlas.ps1
```

The script extracts no source files into the browser build. It samples the
specific staged textures, applies Project Tarmin palettes and contrast, makes
the logical edges tile-compatible, scales the 16px logical pixels to canonical
32×32 regions, and creates protective edge gutters. Archive/output hashes and
the exact source entries are in `DUNGEON_ATLAS_DERIVATION.json`; update that
record and re-review the browser output when the transform changes.

The same derivation script accepts the staged Old School Dungeon Crawler Pack
windows archive. It remaps `Brick 1 - Decorations/Door/Layer 1/Layer 1 - Brick
Door - Center.png` into the existing semantic `iron-door` atlas region and emits
`public/assets/dungeon/archway-stone.png` as a 64×64 transparent, palette-harmonized
opening frame. This is transformed runtime art, not a raw source copy; rerun the
script and update the recorded hashes whenever either output changes.

## Gather or extend the source set

From the downloader directory on Windows:

```powershell
powershell -ExecutionPolicy Bypass -File .\download_all.ps1
```

Use `-FullTextureResolutions` only when a larger source resolution is needed, and `-SkipPS1Fire` when the interactive itch.io download is not required. To add a source needed by the harness, update `download_all.ps1` and `download_all.sh` together, add its provenance and license record to both manifest formats and `LICENSES.md`, and update `EXPECTED_FILES.txt`. Keep the output idempotent: existing files are skipped, failed downloads are removed, and the final bundle is regenerated from the staging directory.

Do not add copyrighted reference assets, copied original game expression, credentials, or unreviewed third-party files to runtime content. If a source's license or intended use is unclear, leave it in staging and record the uncertainty instead of promoting it.
