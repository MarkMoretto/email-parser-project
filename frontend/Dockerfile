# syntax=docker/dockerfile:1
FROM node:16-stretch-slim

WORKDIR /usr/src/app
# WORKDIR /app # Alternative

COPY package*.json /usr/src/app

RUN npm install

COPY . .

CMD [ -d "node_modules"] && npm run start || npm ci && npm run start
