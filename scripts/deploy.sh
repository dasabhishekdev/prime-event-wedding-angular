#!/usr/bin/env bash
# Production deploy — run on the VPS (manually or via GitHub Actions).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

COMPOSE="docker compose -f docker-compose.yml"

echo "==> Rebuilding Prime Event & Wedding..."
$COMPOSE up -d --build --remove-orphans

echo "==> Waiting for container..."
for _ in $(seq 1 30); do
  if docker exec prime-event-wedding wget -qO- http://127.0.0.1/ >/dev/null 2>&1; then
    break
  fi
  sleep 2
done

echo "==> Container status"
$COMPOSE ps

echo "==> Smoke test (app on network web)"
docker run --rm --network web curlimages/curl:8.5.0 -sf "http://prime-event-wedding:80/" >/dev/null

echo "Deploy complete."
