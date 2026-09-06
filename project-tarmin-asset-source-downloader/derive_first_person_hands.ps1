param(
  [string]$Source = (Join-Path $PSScriptRoot "downloads\lofifirstpersonhand.png"),
  [string]$Output = (Join-Path $PSScriptRoot "..\public\assets\first-person\fp-hands-empty.png")
)

Add-Type -AssemblyName System.Drawing

$sourceBitmap = [System.Drawing.Bitmap]::new((Resolve-Path $Source).Path)
$outputDirectory = Split-Path -Parent $Output
New-Item -ItemType Directory -Force -Path $outputDirectory | Out-Null
$scale = 4
$result = [System.Drawing.Bitmap]::new($sourceBitmap.Width * $scale, $sourceBitmap.Height * $scale, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

function Harmonize([System.Drawing.Color]$color) {
  if ($color.A -eq 0) { return [System.Drawing.Color]::Transparent }
  $luma = (0.299 * $color.R) + (0.587 * $color.G) + (0.114 * $color.B)
  if ($luma -lt 90) { return [System.Drawing.Color]::FromArgb($color.A, 34, 27, 24) }
  if ($luma -lt 135) { return [System.Drawing.Color]::FromArgb($color.A, 106, 61, 43) }
  if ($luma -lt 175) { return [System.Drawing.Color]::FromArgb($color.A, 168, 91, 55) }
  if ($luma -lt 215) { return [System.Drawing.Color]::FromArgb($color.A, 215, 149, 74) }
  return [System.Drawing.Color]::FromArgb($color.A, 244, 231, 161)
}

for ($x = 0; $x -lt $sourceBitmap.Width; $x += 1) {
  for ($y = 0; $y -lt $sourceBitmap.Height; $y += 1) {
    $color = Harmonize $sourceBitmap.GetPixel($x, $y)
    for ($dx = 0; $dx -lt $scale; $dx += 1) {
      for ($dy = 0; $dy -lt $scale; $dy += 1) {
        $result.SetPixel(($x * $scale) + $dx, ($y * $scale) + $dy, $color)
      }
    }
  }
}

$result.Save((Resolve-Path $outputDirectory).Path + "\" + (Split-Path -Leaf $Output), [System.Drawing.Imaging.ImageFormat]::Png)
$result.Dispose()
$sourceBitmap.Dispose()
