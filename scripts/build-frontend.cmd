@ECHO OFF

SET IMAGE_NAME=frontend:dev
SET PORTS=3001:3000
SET CHOKIDAR_USEPOLLING=true

CD ..\frontend

::SET DOCKER_CMD=docker run -it --rm -v %CD%:\app -v app\node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true frontend:dev
SET DOCKER_CMD=docker run -it --rm -v %CD%:\app -v app\node_modules -p %PORTS% %IMAGE_NAME%

%DOCKER_CMD%

EXIT /B
