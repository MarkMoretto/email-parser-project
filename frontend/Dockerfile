# syntax=docker/dockerfile:1
FROM node:16-stretch-slim

ENV NODE_ENV=production

WORKDIR /usr/src/app
# WORKDIR /app # Alternative

COPY package*.json ./

RUN npm install --production

COPY . .

# CMD ["npm", "start"]
CMD [ "node", "server.js" ]

# CMD [ -d "node_modules"] && npm run start || npm ci && npm run start
