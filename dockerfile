FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm ci --force