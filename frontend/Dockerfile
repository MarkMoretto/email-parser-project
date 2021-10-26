# syntax=docker/dockerfile:1
FROM node:16-alpine

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH


# Install app dependencies
COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm install react-scripts@3.4.1 -g

# Bundle app source
COPY . ./

# EXPOSE 3000:3000

# Run application
CMD ["npm", "start"]
