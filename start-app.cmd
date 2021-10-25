@ECHO Off



::START "frontend" %ComSpec% /C scripts\start-frontend.cmd
::PING -t 127.0.0.1 -l 1 -n 5 1>nul 2>&1
START "backend" %ComSpec% /C scripts\start-server.cmd

GOTO :eof