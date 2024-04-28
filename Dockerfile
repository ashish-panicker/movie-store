FROM node:18-alpine as build
WORKDIR /app/src
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build --omit==dev

FROM node:18-alpine
WORKDIR /usr/app
COPY --from=build /app/src/dist/movie-store/server ./
CMD node server.mjs
EXPOSE 4000