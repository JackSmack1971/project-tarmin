[CmdletBinding()]
param(
  [string]$BordersArchivePath,
  [string]$FlareTexturePath,
  [string]$OutputDirectory
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

if ([string]::IsNullOrWhiteSpace($BordersArchivePath)) { $BordersArchivePath = Join-Path $PSScriptRoot "downloads\kenney_fantasy-ui-borders.zip" }
if ([string]::IsNullOrWhiteSpace($FlareTexturePath)) { $FlareTexturePath = Join-Path $PSScriptRoot "downloads\flare_tekstuur.png" }
if ([string]::IsNullOrWhiteSpace($OutputDirectory)) { $OutputDirectory = Join-Path $PSScriptRoot "..\public\assets\ui" }

if (!(Test-Path -LiteralPath $BordersArchivePath -PathType Leaf)) { throw "Fantasy UI Borders archive not found: $BordersArchivePath" }
if (!(Test-Path -LiteralPath $FlareTexturePath -PathType Leaf)) { throw "Flare texture not found: $FlareTexturePath" }

Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

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
  } finally { $bytes.Dispose(); $stream.Dispose() }
}

function Get-UiColor([System.Drawing.Color]$Color) {
  if ($Color.A -eq 0) { return [System.Drawing.Color]::FromArgb(0, 0, 0, 0) }
  $luminance = (0.2126 * $Color.R) + (0.7152 * $Color.G) + (0.0722 * $Color.B)
  if ($luminance -lt 80) { return [System.Drawing.Color]::FromArgb($Color.A, 48, 47, 38) }
  if ($luminance -lt 170) { return [System.Drawing.Color]::FromArgb($Color.A, 92, 90, 82) }
  return [System.Drawing.Color]::FromArgb($Color.A, 138, 107, 63)
}

function Save-Transformed([System.Drawing.Bitmap]$Source, [string]$Path, [int]$Width, [int]$Height, [scriptblock]$Sample) {
  $output = New-Object System.Drawing.Bitmap $Width, $Height
  try {
    for ($y = 0; $y -lt $Height; $y += 1) {
      for ($x = 0; $x -lt $Width; $x += 1) { $output.SetPixel($x, $y, (& $Sample $Source $x $y)) }
    }
    $output.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
  } finally { $output.Dispose() }
}

$archive = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path -LiteralPath $BordersArchivePath))
$flare = [System.Drawing.Bitmap]::FromFile((Resolve-Path -LiteralPath $FlareTexturePath))
try {
  New-Item -ItemType Directory -Force -Path $OutputDirectory | Out-Null
  $border = Get-SourceBitmap $archive "PNG/Default/Border/panel-border-000.png"
  $divider = Get-SourceBitmap $archive "PNG/Default/Divider/divider-000.png"
  try {
    Save-Transformed $border (Join-Path $OutputDirectory "panel-border.png") 48 48 {
      param($source, $x, $y) Get-UiColor ($source.GetPixel($x, $y))
    }
    Save-Transformed $divider (Join-Path $OutputDirectory "divider.png") 96 22 {
      param($source, $x, $y) Get-UiColor ($source.GetPixel($x, $y))
    }
  } finally { $border.Dispose(); $divider.Dispose() }

  Save-Transformed $flare (Join-Path $OutputDirectory "panel-texture.png") 64 64 {
    param($source, $x, $y)
    $sourceX = [Math]::Min($source.Width - 1, [Math]::Floor(($x + 48) * $source.Width / 96))
    $sourceY = [Math]::Min($source.Height - 1, [Math]::Floor(($y + 48) * $source.Height / 96))
    $color = $source.GetPixel($sourceX, $sourceY)
    $mapped = Get-UiColor $color
    [System.Drawing.Color]::FromArgb([Math]::Min(42, $mapped.A), $mapped.R, $mapped.G, $mapped.B)
  }
  Write-Output "Generated UI assets in $OutputDirectory"
} finally { $flare.Dispose(); $archive.Dispose() }
