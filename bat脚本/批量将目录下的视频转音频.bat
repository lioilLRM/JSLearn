@echo off & title
 
cd /d %~dp0
 
for %%a in (*.mp4) do (
 
 ffmpeg -i "%%~sa" -y -vn -acodec libmp3lame -aq 0 "%%~na.mp3"
 
)
 
pause