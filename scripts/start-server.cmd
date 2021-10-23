@ECHO OFF


CD backend
SETLOCAL


SET launch_cmd=python -m src
CALL venv\Scripts\activate && %launch_cmd%

:: https://www.uvicorn.org/deployment/

::SET entrypoint=src.server.main:email_app
::::SET HOST=127.0.0.1
::::SET PORT=8000
::SET startdev=uvicorn %entrypoint% --reload


::SET pyvenv=venv
::SET "PATH=venv;venv\Scripts;venv\Lib;%PATH%"

::%startdev%



GOTO :eof