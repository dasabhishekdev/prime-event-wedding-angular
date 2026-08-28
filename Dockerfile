# Builds Angular SSR bundle and runs Express on port 80 (internal only).
# Public routing + SSL: Portfolio/docker/nginx/conf.d/primeevent.conf
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build:ssr

FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=80

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=build /app/dist ./dist

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ > /dev/null || exit 1

CMD ["node", "dist/prime-event-app/server/main.js"]
