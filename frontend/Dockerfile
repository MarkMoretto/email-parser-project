# syntax=docker/dockerfile:1
FROM node:16-slim

WORKDIR /app


# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . ./

EXPOSE 3000

# Run application
CMD ["npm", "run", "start"]
