import { defineConfig } from 'vitest/config';

import { findRenovateConfigFiles } from './test/renovate-config-files.js';

const root = import.meta.dirname;

export default defineConfig({
  test: {
    maxConcurrency: findRenovateConfigFiles(root).length,
    testTimeout: 90_000,
  },
});
