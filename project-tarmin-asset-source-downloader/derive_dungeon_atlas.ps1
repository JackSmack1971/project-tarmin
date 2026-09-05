[CmdletBinding()]
param(
  [string]$ArchivePath,
  [string]$OutputPath,
  [string]$ArchitectureArchivePath,
  [string]$ArchwayOutputPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

if ([string]::IsNullOrWhiteSpace($ArchivePath)) { $ArchivePath = Join-Path $PSScriptRoot "downloads\sbs_-_tiny_texture_pack_2_-_128x128.zip" }
if ([string]::IsNullOrWhiteSpace($OutputPath)) { $OutputPath = Join-Path $PSScriptRoot "..\public\assets\dungeon\dungeon-surfaces.png" }
if ([string]::IsNullOrWhiteSpace($ArchitectureArchivePath)) { $ArchitectureArchivePath = Join-Path $PSScriptRoot "downloads\sbs_-_dungeon_crawler_pack_-_windows.zip" }
if ([string]::IsNullOrWhiteSpace($ArchwayOutputPath)) { $ArchwayOutputPath = Join-Path $PSScriptRoot "..\public\assets\dungeon\archway-stone.png" }

if (!(Test-Path -LiteralPath $ArchivePath -PathType Leaf)) {
  throw "Tiny Texture Pack 2 archive not found: $ArchivePath"
}

Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$materials = @(
  @{ Id = "crypt-stone"; Entry = "128x128/Brick/Brick_01-128x128.png"; Palette = @("#171b13", "#303827", "#4e5a38", "#75834d") },
  @{ Id = "burial-masonry"; Entry = "128x128/Brick/Brick_02-128x128.png"; Palette = @("#12170f", "#29301f", "#3f482f", "#637048") },
  @{ Id = "basalt"; Entry = "128x128/Stone/Stone_01-128x128.png"; Palette = @("#0c100d", "#182019", "#29362a", "#405143") },
  @{ Id = "timber-door"; Entry = "128x128/Wood/Wood_01-128x128.png"; Palette = @("#1c1710", "#3e2d1b", "#674627", "#9b6938", "#c08b4d") },
  @{ Id = "iron-door"; Entry = "128x128/Metal/Metal_01-128x128.png"; Palette = @("#111714", "#26322b", "#45564a", "#6b7b69", "#93a187") },
  @{ Id = "floor-stone"; Entry = "128x128/Tile/Tile_01-128x128.png"; Palette = @("#13170f", "#2d3522", "#4a5737", "#687549") },
  @{ Id = "ceiling-stone"; Entry = "128x128/Stone/Stone_02-128x128.png"; Palette = @("#0d120d", "#1d261c", "#2d392a", "#46563c") }
)

function Get-SourceBitmap([System.IO.Compression.ZipArchive]$Archive, [string]$EntryName) {
  $entry = $Archive.GetEntry($EntryName)
  if ($null -eq $entry) { throw "Source entry not found: $EntryName" }
  $stream = $entry.Open()
  $bytes = New-Object System.IO.MemoryStream
  try {
    $stream.CopyTo($bytes)
    $bytes.Position = 0
    $image = [System.Drawing.Image]::FromStream($bytes)
    try { return New-Object System.Drawing.Bitmap $image } finally { $image.Dispose() }
  } finally {
    $bytes.Dispose()
    $stream.Dispose()
  }
}

function Get-PaletteIndex([System.Drawing.Color]$Color, [int]$Count) {
  $luminance = (0.2126 * $Color.R) + (0.7152 * $Color.G) + (0.0722 * $Color.B)
  $contrast = [Math]::Max(0, [Math]::Min(255, (($luminance - 128) * 1.45) + 128))
  return [Math]::Min($Count - 1, [Math]::Floor(($contrast / 256) * $Count))
}

$archive = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path -LiteralPath $ArchivePath))
$architectureArchive = $null
$atlas = New-Object System.Drawing.Bitmap 136, 68
try {
  $atlasGraphics = [System.Drawing.Graphics]::FromImage($atlas)
  $atlasGraphics.Clear([System.Drawing.Color]::FromArgb(6, 9, 7))
  $atlasGraphics.Dispose()

  for ($index = 0; $index -lt $materials.Count; $index += 1) {
    $material = $materials[$index]
    $source = Get-SourceBitmap $archive $material.Entry
    try {
      $x = 1 + (($index % 4) * 34)
      $y = 1 + ([Math]::Floor($index / 4) * 34)
      $colors = $material.Palette | ForEach-Object { [System.Drawing.ColorTranslator]::FromHtml($_) }
      $pixels = @()
      for ($sampleY = 0; $sampleY -lt 16; $sampleY += 1) {
        $row = @()
        for ($sampleX = 0; $sampleX -lt 16; $sampleX += 1) {
          $row += $colors[(Get-PaletteIndex $source.GetPixel(($sampleX * 8) + 4, ($sampleY * 8) + 4) $colors.Count)]
        }
        $pixels += ,$row
      }

      # Match opposite edges before scaling so the 16px logical texture tiles cleanly.
      for ($sample = 0; $sample -lt 16; $sample += 1) {
        $pixels[15][$sample] = $pixels[0][$sample]
        $pixels[$sample][15] = $pixels[$sample][0]
      }

      for ($sampleY = 0; $sampleY -lt 16; $sampleY += 1) {
        for ($sampleX = 0; $sampleX -lt 16; $sampleX += 1) {
          $color = $pixels[$sampleY][$sampleX]
          for ($dy = 0; $dy -lt 2; $dy += 1) {
            for ($dx = 0; $dx -lt 2; $dx += 1) { $atlas.SetPixel($x + ($sampleX * 2) + $dx, $y + ($sampleY * 2) + $dy, $color) }
          }
        }
      }

      # A copied one-pixel gutter is the atlas-level guard against neighboring-region bleed.
      for ($pixel = 0; $pixel -lt 32; $pixel += 1) {
        $atlas.SetPixel($x - 1, $y + $pixel, $atlas.GetPixel($x, $y + $pixel))
        $atlas.SetPixel($x + 32, $y + $pixel, $atlas.GetPixel($x + 31, $y + $pixel))
        $atlas.SetPixel($x + $pixel, $y - 1, $atlas.GetPixel($x + $pixel, $y))
        $atlas.SetPixel($x + $pixel, $y + 32, $atlas.GetPixel($x + $pixel, $y + 31))
      }
      $atlas.SetPixel($x - 1, $y - 1, $atlas.GetPixel($x, $y))
      $atlas.SetPixel($x + 32, $y - 1, $atlas.GetPixel($x + 31, $y))
      $atlas.SetPixel($x - 1, $y + 32, $atlas.GetPixel($x, $y + 31))
      $atlas.SetPixel($x + 32, $y + 32, $atlas.GetPixel($x + 31, $y + 31))
    } finally { $source.Dispose() }
  }

  # Darkness remains a Project Tarmin authored aperture: deliberately near-black,
  # with only a restrained seam so it never competes with portals or blockers.
  $darknessX = 103; $darknessY = 35
  for ($pixel = 0; $pixel -lt 32; $pixel += 1) {
    $shade = if ($pixel % 7 -eq 0) { [System.Drawing.Color]::FromArgb(10, 14, 10) } else { [System.Drawing.Color]::FromArgb(6, 9, 7) }
    $atlas.SetPixel($darknessX + $pixel, $darknessY, $shade)
    $atlas.SetPixel($darknessX + $pixel, $darknessY + 31, $shade)
    $atlas.SetPixel($darknessX, $darknessY + $pixel, $shade)
    $atlas.SetPixel($darknessX + 31, $darknessY + $pixel, $shade)
  }
  for ($pixel = 0; $pixel -lt 32; $pixel += 1) {
    $atlas.SetPixel($darknessX - 1, $darknessY + $pixel, $atlas.GetPixel($darknessX, $darknessY + $pixel))
    $atlas.SetPixel($darknessX + 32, $darknessY + $pixel, $atlas.GetPixel($darknessX + 31, $darknessY + $pixel))
    $atlas.SetPixel($darknessX + $pixel, $darknessY - 1, $atlas.GetPixel($darknessX + $pixel, $darknessY))
    $atlas.SetPixel($darknessX + $pixel, $darknessY + 32, $atlas.GetPixel($darknessX + $pixel, $darknessY + 31))
  }

  if (Test-Path -LiteralPath $ArchitectureArchivePath -PathType Leaf) {
    $architectureArchive = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path -LiteralPath $ArchitectureArchivePath))
    $doorSource = Get-SourceBitmap $architectureArchive "Brick 1 - Decorations/Door/Layer 1/Layer 1 - Brick Door - Center.png"
    try {
      $ironPalette = @("#111714", "#26322b", "#45564a", "#6b7b69", "#93a187") | ForEach-Object { [System.Drawing.ColorTranslator]::FromHtml($_) }
      for ($y = 0; $y -lt 32; $y += 1) {
        for ($x = 0; $x -lt 32; $x += 1) {
          $color = $doorSource.GetPixel([Math]::Min(127, 20 + [Math]::Floor($x * 88 / 32)), [Math]::Min(127, 12 + [Math]::Floor($y * 116 / 32)))
          $luminance = (0.2126 * $color.R) + (0.7152 * $color.G) + (0.0722 * $color.B)
          $index = [Math]::Min($ironPalette.Count - 1, [Math]::Floor(([Math]::Max(0, [Math]::Min(255, (($luminance - 92) * 1.55) + 92)) / 256) * $ironPalette.Count))
          $atlas.SetPixel(1 + $x, 35 + $y, $ironPalette[$index])
        }
      }
    } finally { $doorSource.Dispose() }

    $archSource = Get-SourceBitmap $architectureArchive "Brick 1 - Decorations/Door/Layer 1/Layer 1 - Brick Door - Center.png"
    try {
      $archway = New-Object System.Drawing.Bitmap 64, 64
      try {
        $stonePalette = @("#111714", "#29301f", "#4e5a38", "#75834d") | ForEach-Object { [System.Drawing.ColorTranslator]::FromHtml($_) }
        for ($y = 0; $y -lt 64; $y += 1) {
          for ($x = 0; $x -lt 64; $x += 1) {
            $outer = if ($y -lt 32) { [Math]::Pow(($x - 31.5) / 28.5, 2) + [Math]::Pow(($y - 31.5) / 31.5, 2) -le 1 } else { $x -ge 3 -and $x -le 60 }
            $inner = if ($y -lt 33) { [Math]::Pow(($x - 31.5) / 21.5, 2) + [Math]::Pow(($y - 34) / 23, 2) -lt 1 } else { $x -ge 15 -and $x -le 48 }
            if (-not $outer -or $inner) { $archway.SetPixel($x, $y, [System.Drawing.Color]::FromArgb(0, 0, 0, 0)); continue }
            $color = $archSource.GetPixel(($x * 2) + 1, ($y * 2) + 1)
            $luminance = (0.2126 * $color.R) + (0.7152 * $color.G) + (0.0722 * $color.B)
            $index = [Math]::Min($stonePalette.Count - 1, [Math]::Floor(([Math]::Max(0, [Math]::Min(255, (($luminance - 100) * 1.4) + 100)) / 256) * $stonePalette.Count))
            $archway.SetPixel($x, $y, $stonePalette[$index])
          }
        }
        $archwayDirectory = Split-Path -Parent $ArchwayOutputPath
        New-Item -ItemType Directory -Force -Path $archwayDirectory | Out-Null
        $archway.Save($ArchwayOutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
      } finally { $archway.Dispose() }
    } finally { $archSource.Dispose() }
  }

  $outputDirectory = Split-Path -Parent $OutputPath
  New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null
  $atlas.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
  Write-Output "Generated $OutputPath"
} finally {
  $atlas.Dispose()
  $archive.Dispose()
  if ($null -ne $architectureArchive) { $architectureArchive.Dispose() }
}
