# syntax=docker/dockerfile:1
FROM node:16-slim

WORKDIR /usr/src/app


# Install app dependencies
COPY package*.json /usr/src/app
RUN npm install

# Bundle app source
COPY . /usr/src/app

# Run application
# CMD ["yarn", "start"]
