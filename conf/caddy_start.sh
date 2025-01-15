#!/bin/sh
mkdir -p /etc/caddy
curl https://raw.githubusercontent.com/Cian-H/am-d-model.eu/refs/heads/prod/conf/Caddyfile > /etc/caddy/Caddyfile
exec caddy run --config /etc/caddy/Caddyfile
