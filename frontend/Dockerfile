# syntax=docker/dockerfile:1
FROM node:16-slim

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Run application
CMD ["npm", "start"]
