# Project Tarmin — source-pack downloader

This bundle downloads the verified source material selected for the 12-file Project Tarmin art manifest **without modifying the game repository**.

## Windows

1. Extract this ZIP to a working folder.
2. Right-click `download_all.ps1` and run with PowerShell, or execute:

   ```powershell
   powershell -ExecutionPolicy Bypass -File .\download_all.ps1
   ```

3. The script creates `downloads\` and then `project-tarmin-source-packs.zip`.

To additionally download the 256×256 and 512×512 variants of Tiny Texture Pack 2:

```powershell
powershell -ExecutionPolicy Bypass -File .\download_all.ps1 -FullTextureResolutions
```

## Linux/macOS

```bash
chmod +x download_all.sh
./download_all.sh
```

## PS1 Fire / itch.io exception

itch.io does not expose a stable static free-download URL until the visitor chooses **“No thanks, just take me to the downloads.”** The Windows script opens the official page and waits for `Fire Spritesheet.zip`; if you save it to your normal Downloads folder, the script will copy it automatically. The shell script gives the same instructions.

## Production set

This downloader covers:

- Tiny Texture Pack 2 — 128×128 production variant by default
- Old School Dungeon Crawler Pack + Cave Walls Addon
- PS1 Fire
- Fantasy UI Borders
- Flare windows
- Fantasy Torch Pack 1
- Lo Fi First Person Hand
- Fantasy FPS Hands (processed PNGs + raw.zip)
- 1-Bit Doomgeon Kit

The CC-BY-SA Clint Bellanger pack is intentionally excluded.

See `SOURCE_MANIFEST.json`, `SOURCE_MANIFEST.csv`, and `LICENSES.md` for provenance.
