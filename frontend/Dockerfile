# syntax=docker/dockerfile:1
FROM node:16

WORKDIR /usr/src/app


# Install app dependencies
COPY package*.json /usr/src/app
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 3000

# Run application
CMD ["npm", "run", "start"]
