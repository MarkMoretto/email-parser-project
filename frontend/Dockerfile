# syntax=docker/dockerfile:1
FROM node:16-slim

WORKDIR /usr/src/app

RUN npm install -g yarn

# Install app dependencies
COPY package*.json /usr/src/app
RUN yarn

# Bundle app source
COPY . /usr/src/app

# Run application
# CMD ["yarn", "start"]
