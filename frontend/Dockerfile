# Build the frontend
FROM node:20 as build
WORKDIR /usr/src/app

COPY . .

RUN npm ci
# Actual building
RUN npm run build

# Server image
FROM caddy as server
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=build /usr/src/app/dist/frontend/browser /usr/dist

EXPOSE 8000