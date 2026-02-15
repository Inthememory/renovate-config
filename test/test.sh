#!/bin/sh
set -e

preset_files=$(grep -lri --exclude-dir=node_modules --include="*.json" "https://docs.renovatebot.com/renovate-schema.json" .)

for preset_file in $preset_files; do
  RENOVATE_CONFIG_FILE="$preset_file" npm exec -- renovate-config-validator
done
