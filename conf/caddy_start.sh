#!/bin/sh
set -x  # Enable debug output
mkdir -p /etc/caddy
curl -v https://raw.githubusercontent.com/Cian-H/am-d-model.eu/refs/heads/prod/conf/Caddyfile > /etc/caddy/Caddyfile
ls -la /etc/caddy/Caddyfile  # Verify file exists and permissions
cat /etc/caddy/Caddyfile     # Print contents to log
exec caddy run --config /etc/caddy/Caddyfile
