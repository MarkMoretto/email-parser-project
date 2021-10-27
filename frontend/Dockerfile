# syntax=docker/dockerfile:1
FROM node:16-stretch-slim

# ENV NODE_ENV=production

WORKDIR /app
# WORKDIR /app # Alternative

COPY package*.json /app

# RUN npm install --production
RUN npm install

COPY . .

CMD ["npm", "start"]
# CMD [ "node", "src/server.js" ]

# CMD [ -d "node_modules"] && npm run start || npm ci && npm run start
