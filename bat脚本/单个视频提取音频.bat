@echo off
setlocal enabledelayedexpansion

set "input_file=%1"
set "output_file=%input_file%.mp3"

if not exist "%output_file%" (
    ffmpeg -i "%input_file%" -y -vn -acodec libmp3lame -aq 0 "%output_file%"
)

echo The audio from the video has been extracted and saved as "%output_file%".

endlocal
