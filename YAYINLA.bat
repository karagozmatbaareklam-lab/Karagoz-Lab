@echo off
setlocal
cd /d "%~dp0"

where git >nul 2>&1
if errorlevel 1 (
  echo HATA: Git bulunamadi. Once Git for Windows kurulmalidir.
  pause
  exit /b 1
)

git rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
  echo HATA: Bu klasor bir Git deposu degil.
  echo Dosyalari GitHub'dan indirdiginiz ana proje klasorune kopyalayip tekrar deneyin.
  pause
  exit /b 1
)

echo Degisiklikler kontrol ediliyor...
git status --short
echo.
set /p commit_message=Guncelleme aciklamasi yazin [Tema guncellemesi]: 
if "%commit_message%"=="" set "commit_message=Tema guncellemesi"

git add .
git commit -m "%commit_message%" >nul 2>&1
echo.
echo GitHub'a gonderiliyor, lutfen bekleyin...
git push origin main
if errorlevel 1 (
  echo GitHub'a gonderilemedi. GitHub oturumunu ve internet baglantisini kontrol edin.
  pause
  exit /b 1
)

echo.
echo YAYINLAMA BASLATILDI. Vercel yeni surumu otomatik derleyecek.
pause
