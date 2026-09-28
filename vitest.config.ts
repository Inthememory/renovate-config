import { findRenovateConfigFiles } from './test/renovate-config-files.js';
import { defineConfig } from './vitest.config.shared.js';

const root = import.meta.dirname;

export default defineConfig({
  test: {
    maxConcurrency: findRenovateConfigFiles(root).length,
    testTimeout: 90_000,
  },
});
