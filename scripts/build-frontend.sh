#!/bin/bash

cd ..
./frontend

# First
docker build -t frontend:dev .

# Once that is complete
docker run -it --rm -v "${PWD}":/app \
-v /app/node_modules \
-p 3001:3000 \
-e CHOKIDAR_USEPOLLING=true \
frontend:dev

docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true frontend:dev