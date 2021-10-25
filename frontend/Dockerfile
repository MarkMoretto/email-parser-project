# syntax=docker/dockerfile:1
FROM node:16

WORKDIR /app


# Install app dependencies
COPY package*.json /app
RUN npm install

# Bundle app source
COPY . /app

EXPOSE 3000:3000

# Run application
CMD ["npm", "run", "start"]
