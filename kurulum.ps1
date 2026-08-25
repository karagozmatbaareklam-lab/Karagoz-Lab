$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "Karagoz Matbaa & Reklam tema kurulumu baslatiliyor..." -ForegroundColor Cyan

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "HATA: Node.js bulunamadi. Node.js 22.13 veya daha yeni bir surum kurun." -ForegroundColor Red
    exit 1
}

if (-not (Get-Command npm.cmd -ErrorAction SilentlyContinue)) {
    Write-Host "HATA: npm bulunamadi." -ForegroundColor Red
    exit 1
}

$nodeVersionText = (& node -p "process.versions.node").Trim()
$nodeVersion = [version]$nodeVersionText
$requiredVersion = [version]"22.13.0"

if ($nodeVersion -lt $requiredVersion) {
    Write-Host "HATA: Node.js 22.13 veya daha yeni bir surum gerekiyor. Mevcut surum: $nodeVersionText" -ForegroundColor Red
    exit 1
}

Write-Host "1/2 - Gerekli paketler kuruluyor..." -ForegroundColor Yellow
& npm.cmd ci
if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}

Write-Host "2/2 - Guncel tema derleniyor..." -ForegroundColor Yellow
& npm.cmd run build
if ($LASTEXITCODE -ne 0) {
    exit $LASTEXITCODE
}

Write-Host "Kurulum ve derleme basariyla tamamlandi." -ForegroundColor Green
Write-Host "Yerel olarak acmak icin: npm.cmd run start"

