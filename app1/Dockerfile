# syntax=docker/dockerfile:1

FROM node:12.18.1
#FROM node:10-alpine

ENV NODE_ENV=production
WORKDIR /app
COPY . .
RUN npm install express
CMD [ "node", "index.js" ]