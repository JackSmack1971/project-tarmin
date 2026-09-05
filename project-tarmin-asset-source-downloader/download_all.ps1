param(
    [string]$OutputDir = "$PSScriptRoot\downloads",
    [switch]$FullTextureResolutions,
    [switch]$SkipPS1Fire
)

$ErrorActionPreference = "Stop"
$ProgressPreference = "SilentlyContinue"
New-Item -ItemType Directory -Force -Path $OutputDir | Out-Null

function Get-Asset {
    param([string]$Url, [string]$Name)
    $dest = Join-Path $OutputDir $Name
    if (Test-Path $dest) {
        Write-Host "[skip] $Name already exists"
        return
    }
    Write-Host "[get ] $Name"
    try {
        Invoke-WebRequest -Uri $Url -OutFile $dest -MaximumRedirection 10 -UseBasicParsing
        if ((Get-Item $dest).Length -eq 0) { throw "Downloaded file is empty" }
    } catch {
        if (Test-Path $dest) { Remove-Item $dest -Force }
        Write-Warning "Failed: $Name`n  $Url`n  $($_.Exception.Message)"
    }
}

# Tiny Texture Pack 2 — production resolution
Get-Asset "https://opengameart.org/sites/default/files/sbs_-_tiny_texture_pack_2_-_128x128.zip" "sbs_-_tiny_texture_pack_2_-_128x128.zip"
if ($FullTextureResolutions) {
    Get-Asset "https://opengameart.org/sites/default/files/sbs_-_tiny_texture_pack_2_-_256x256.zip" "sbs_-_tiny_texture_pack_2_-_256x256.zip"
    Get-Asset "https://opengameart.org/sites/default/files/sbs_-_tiny_texture_pack_2_-_512x512.zip" "sbs_-_tiny_texture_pack_2_-_512x512.zip"
}

# Old School Dungeon Crawler Pack
Get-Asset "https://opengameart.org/sites/default/files/sbs_-_dungeon_crawler_pack_-_walls.zip" "sbs_-_dungeon_crawler_pack_-_walls.zip"
Get-Asset "https://opengameart.org/sites/default/files/sbs_-_dungeon_crawler_pack_-_windows.zip" "sbs_-_dungeon_crawler_pack_-_windows.zip"
Get-Asset "https://screamingbrainstudios.com/sbs_-_cave_walls_addon/" "SBS_-_Cave_Walls_Addon.zip"

# UI sources
Get-Asset "https://opengameart.org/sites/default/files/kenney_fantasy-ui-borders.zip" "kenney_fantasy-ui-borders.zip"
Get-Asset "https://opengameart.org/sites/default/files/window.png" "flare_window.png"
Get-Asset "https://opengameart.org/sites/default/files/tekstuur.png" "flare_tekstuur.png"
Get-Asset "https://opengameart.org/sites/default/files/window_glow.png" "flare_window_glow.png"

# Torch source
Get-Asset "https://opengameart.org/sites/default/files/fantasy-torch-pack-1.zip" "fantasy-torch-pack-1.zip"

# First-person hands
Get-Asset "https://opengameart.org/sites/default/files/lofifirstpersonhand.png" "lofifirstpersonhand.png"
Get-Asset "https://opengameart.org/sites/default/files/weaponspell1.png" "weaponspell1.png"
Get-Asset "https://opengameart.org/sites/default/files/weaponspell2.png" "weaponspell2.png"
Get-Asset "https://opengameart.org/sites/default/files/weaponspell3.png" "weaponspell3.png"
Get-Asset "https://opengameart.org/sites/default/files/weaponstaff.png" "weaponstaff.png"
Get-Asset "https://opengameart.org/sites/default/files/raw.zip" "fantasy-fps-hands-raw.zip"

# Warden reference source
Get-Asset "https://opengameart.org/sites/default/files/doomgeonkit.zip" "doomgeonkit.zip"

# PS1 Fire — itch free-download flow requires the browser interaction.
if (-not $SkipPS1Fire) {
    $fireDest = Join-Path $OutputDir "Fire Spritesheet.zip"
    if (-not (Test-Path $fireDest)) {
        Write-Host ""
        Write-Host "PS1 Fire requires one itch.io confirmation." -ForegroundColor Yellow
        Write-Host "Opening: https://limphands.itch.io/ps1-fire/purchase"
        Write-Host "Click 'No thanks, just take me to the downloads' and download 'Fire Spritesheet.zip'."
        Start-Process "https://limphands.itch.io/ps1-fire/purchase"

        $normalDownloads = Join-Path $HOME "Downloads\Fire Spritesheet.zip"
        Write-Host "Waiting up to 10 minutes for the file in either:"
        Write-Host "  $fireDest"
        Write-Host "  $normalDownloads"
        $deadline = (Get-Date).AddMinutes(10)
        while ((Get-Date) -lt $deadline) {
            if (Test-Path $fireDest) { break }
            if (Test-Path $normalDownloads) {
                Copy-Item $normalDownloads $fireDest -Force
                break
            }
            Start-Sleep -Seconds 2
        }
        if (-not (Test-Path $fireDest)) {
            Write-Warning "Fire Spritesheet.zip was not found. You can place it in $OutputDir and rerun the script."
        }
    }
}

# Copy provenance beside the downloads.
Copy-Item (Join-Path $PSScriptRoot "SOURCE_MANIFEST.json") $OutputDir -Force
Copy-Item (Join-Path $PSScriptRoot "SOURCE_MANIFEST.csv") $OutputDir -Force
Copy-Item (Join-Path $PSScriptRoot "LICENSES.md") $OutputDir -Force

# Create one distributable source bundle locally.
$bundle = Join-Path $PSScriptRoot "project-tarmin-source-packs.zip"
if (Test-Path $bundle) { Remove-Item $bundle -Force }
Compress-Archive -Path (Join-Path $OutputDir "*") -DestinationPath $bundle -CompressionLevel Optimal
Write-Host ""
Write-Host "Done: $bundle" -ForegroundColor Green
