# Builds Angular and serves static files on port 80 (internal only).
# Public routing + SSL: Portfolio/docker/nginx/conf.d/primeevent.conf
FROM node:16-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build:prod

FROM nginx:1.27-alpine

COPY docker/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/prime-event-app /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ > /dev/null || exit 1

CMD ["nginx", "-g", "daemon off;"]
