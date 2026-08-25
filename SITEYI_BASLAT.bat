@echo off
setlocal
cd /d "%~dp0"

if not exist node_modules (
  echo Once KURULUM.bat dosyasini calistirmaniz gerekiyor.
  pause
  exit /b 1
)

echo Site baslatiliyor: http://localhost:3000
echo Kapatmak icin bu pencerede Ctrl+C tuslarina basin.
call npm run dev
pause
