#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
OUT="${1:-$ROOT/downloads}"
mkdir -p "$OUT"

get_asset() {
  local url="$1" name="$2"
  if [[ -s "$OUT/$name" ]]; then echo "[skip] $name"; return; fi
  echo "[get ] $name"
  if ! curl -fL --retry 3 --retry-delay 2 "$url" -o "$OUT/$name"; then
    rm -f "$OUT/$name"
    echo "[warn] failed: $url" >&2
  fi
}

get_asset "https://opengameart.org/sites/default/files/sbs_-_tiny_texture_pack_2_-_128x128.zip" "sbs_-_tiny_texture_pack_2_-_128x128.zip"
get_asset "https://opengameart.org/sites/default/files/sbs_-_dungeon_crawler_pack_-_walls.zip" "sbs_-_dungeon_crawler_pack_-_walls.zip"
get_asset "https://opengameart.org/sites/default/files/sbs_-_dungeon_crawler_pack_-_windows.zip" "sbs_-_dungeon_crawler_pack_-_windows.zip"
get_asset "https://screamingbrainstudios.com/sbs_-_cave_walls_addon/" "SBS_-_Cave_Walls_Addon.zip"
get_asset "https://opengameart.org/sites/default/files/kenney_fantasy-ui-borders.zip" "kenney_fantasy-ui-borders.zip"
get_asset "https://opengameart.org/sites/default/files/window.png" "flare_window.png"
get_asset "https://opengameart.org/sites/default/files/tekstuur.png" "flare_tekstuur.png"
get_asset "https://opengameart.org/sites/default/files/window_glow.png" "flare_window_glow.png"
get_asset "https://opengameart.org/sites/default/files/fantasy-torch-pack-1.zip" "fantasy-torch-pack-1.zip"
get_asset "https://opengameart.org/sites/default/files/lofifirstpersonhand.png" "lofifirstpersonhand.png"
get_asset "https://opengameart.org/sites/default/files/weaponspell1.png" "weaponspell1.png"
get_asset "https://opengameart.org/sites/default/files/weaponspell2.png" "weaponspell2.png"
get_asset "https://opengameart.org/sites/default/files/weaponspell3.png" "weaponspell3.png"
get_asset "https://opengameart.org/sites/default/files/weaponstaff.png" "weaponstaff.png"
get_asset "https://opengameart.org/sites/default/files/raw.zip" "fantasy-fps-hands-raw.zip"
get_asset "https://opengameart.org/sites/default/files/doomgeonkit.zip" "doomgeonkit.zip"

cp "$ROOT/SOURCE_MANIFEST.json" "$ROOT/SOURCE_MANIFEST.csv" "$ROOT/LICENSES.md" "$OUT/"

echo
echo "PS1 Fire requires itch.io's free-download confirmation:"
echo "  https://limphands.itch.io/ps1-fire/purchase"
echo "Choose 'No thanks, just take me to the downloads' and save Fire Spritesheet.zip into:"
echo "  $OUT"

if command -v xdg-open >/dev/null 2>&1; then xdg-open "https://limphands.itch.io/ps1-fire/purchase" >/dev/null 2>&1 || true
elif command -v open >/dev/null 2>&1; then open "https://limphands.itch.io/ps1-fire/purchase" || true
fi

echo "After Fire Spritesheet.zip is present, run:"
echo "  (cd '$OUT' && zip -r '../project-tarmin-source-packs.zip' .)"
