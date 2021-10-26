# syntax=docker/dockerfile:1
FROM node:16.4.2

ENV NODE_ENV=production
ENV DISABLE_ESLINT_PLUGIN=true
ENV COMPOSE_CONVERT_WINDOWS_PATHS=1
ENV CHOKIDAR_USEPOLLING=true

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH


# Install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production
RUN npm install react-scripts@3.4.1 -g

# Bundle app source
COPY . .

# EXPOSE 3000:3000

# Run application
CMD ["npm", "start"]
