# syntax=docker/dockerfile:1
FROM node:16-slim

WORKDIR /app


# Install app dependencies
COPY package*.json /app
RUN npm install

# Bundle app source
COPY . /app

# Run application
CMD ["npm", "start"]
