@echo off
cd /d "%~dp0"
echo Karagoz Matbaa sitesi baslatiliyor...
echo Bu pencere acik kalmalidir.
call npm.cmd run start
pause

