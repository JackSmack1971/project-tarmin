[CmdletBinding()]
param(
  [string]$TorchArchivePath,
  [string]$FireArchivePath,
  [string]$SconceOutputPath,
  [string]$FlameOutputPath
)

Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
if ([string]::IsNullOrWhiteSpace($TorchArchivePath)) { $TorchArchivePath = Join-Path $PSScriptRoot "downloads\fantasy-torch-pack-1.zip" }
if ([string]::IsNullOrWhiteSpace($FireArchivePath)) { $FireArchivePath = Join-Path $PSScriptRoot "downloads\Fire Spritesheet.zip" }
if ([string]::IsNullOrWhiteSpace($SconceOutputPath)) { $SconceOutputPath = Join-Path $PSScriptRoot "..\public\assets\dungeon\torch-sconce.png" }
if ([string]::IsNullOrWhiteSpace($FlameOutputPath)) { $FlameOutputPath = Join-Path $PSScriptRoot "..\public\assets\dungeon\torch-flame.png" }
foreach ($path in @($TorchArchivePath, $FireArchivePath)) { if (!(Test-Path -LiteralPath $path -PathType Leaf)) { throw "Source archive not found: $path" } }

Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.IO.Compression.FileSystem

function Read-ZipBitmap([System.IO.Compression.ZipArchive]$Archive, [string]$EntryName) {
  $entry = $Archive.GetEntry($EntryName)
  if ($null -eq $entry) { throw "Source entry not found: $EntryName" }
  $stream = $entry.Open()
  $memory = New-Object System.IO.MemoryStream
  try { $stream.CopyTo($memory); $memory.Position = 0; $image = [System.Drawing.Image]::FromStream($memory); try { return New-Object System.Drawing.Bitmap $image } finally { $image.Dispose() } }
  finally { $memory.Dispose(); $stream.Dispose() }
}

$torchArchive = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path -LiteralPath $TorchArchivePath))
$fireArchive = [System.IO.Compression.ZipFile]::OpenRead((Resolve-Path -LiteralPath $FireArchivePath))
try {
  $torchTexture = Read-ZipBitmap $torchArchive "torch.JPG"
  $fireSource = Read-ZipBitmap $fireArchive "Fire Spritesheet.png"
  try {
    # The source pack supplies the material reference; the silhouette and palette are
    # authored for Tarmin, then filled from the source texture's luminance bands.
    $sconce = New-Object System.Drawing.Bitmap 64, 64, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    try {
      $stone = @([System.Drawing.Color]::FromArgb(255, 17, 23, 20), [System.Drawing.Color]::FromArgb(255, 41, 48, 31), [System.Drawing.Color]::FromArgb(255, 78, 90, 56), [System.Drawing.Color]::FromArgb(255, 117, 131, 77))
      for ($y = 0; $y -lt 64; $y += 1) { for ($x = 0; $x -lt 64; $x += 1) {
        $plate = ($x -ge 26 -and $x -le 37 -and $y -ge 8 -and $y -le 48)
        $arm = ($x -ge 30 -and $x -le 44 -and $y -ge 28 -and $y -le 35)
        $bowl = (($x - 31.5) * ($x - 31.5) / 250.0 + ($y - 36) * ($y - 36) / 58.0 -le 1) -and $y -ge 30 -and $y -le 48
        if (!($plate -or $arm -or $bowl)) { $sconce.SetPixel($x, $y, [System.Drawing.Color]::Transparent); continue }
        $sample = $torchTexture.GetPixel(($x * 16) % 1024, ($y * 16) % 1024)
        $luminance = (0.2126 * $sample.R) + (0.7152 * $sample.G) + (0.0722 * $sample.B)
        $index = [Math]::Min(3, [Math]::Floor(($luminance / 256) * 4))
        if (($x -eq 26 -or $x -eq 37) -or ($y -eq 8 -or $y -eq 48)) { $index = 0 }
        $sconce.SetPixel($x, $y, $stone[$index])
      }}
      New-Item -ItemType Directory -Force -Path (Split-Path -Parent $SconceOutputPath) | Out-Null
      $sconce.Save($SconceOutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    } finally { $sconce.Dispose() }

    $flame = New-Object System.Drawing.Bitmap 128, 48, ([System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    try {
      $flameColors = @([System.Drawing.Color]::FromArgb(255, 122, 47, 22), [System.Drawing.Color]::FromArgb(255, 184, 103, 47), [System.Drawing.Color]::FromArgb(255, 240, 182, 75), [System.Drawing.Color]::FromArgb(255, 244, 231, 161))
      for ($frame = 0; $frame -lt 4; $frame += 1) { for ($y = 0; $y -lt 48; $y += 1) { for ($x = 0; $x -lt 32; $x += 1) {
        $sourceX = $frame * 256 + [Math]::Min(255, [Math]::Floor($x * 256 / 32))
        $sourceY = [Math]::Min(255, [Math]::Floor($y * 256 / 48))
        $pixel = $fireSource.GetPixel($sourceX, $sourceY)
        $brightness = [Math]::Max($pixel.R, [Math]::Max($pixel.G, $pixel.B))
        if ($brightness -lt 18) { $flame.SetPixel(($frame * 32) + $x, $y, [System.Drawing.Color]::Transparent); continue }
        $alpha = [Math]::Min(255, [Math]::Max(0, ($brightness - 12) * 3))
        $luminance = (0.2126 * $pixel.R) + (0.7152 * $pixel.G) + (0.0722 * $pixel.B)
        $index = [Math]::Min(3, [Math]::Floor(($luminance / 256) * 4))
        $color = $flameColors[$index]
        $flame.SetPixel(($frame * 32) + $x, $y, [System.Drawing.Color]::FromArgb($alpha, $color.R, $color.G, $color.B))
      }}}
      New-Item -ItemType Directory -Force -Path (Split-Path -Parent $FlameOutputPath) | Out-Null
      $flame.Save($FlameOutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
    } finally { $flame.Dispose() }
    Write-Output "Generated $SconceOutputPath and $FlameOutputPath"
  } finally { $torchTexture.Dispose(); $fireSource.Dispose() }
} finally { $torchArchive.Dispose(); $fireArchive.Dispose() }
