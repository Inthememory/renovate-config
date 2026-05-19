import { defineConfig } from 'vitest/config';
import { findRenovateConfigFiles } from './test/renovate-config-files.js';

const root = import.meta.dirname;

export default defineConfig({
  test: {
    testTimeout: 90_000,
    maxConcurrency: findRenovateConfigFiles(root).length,
  },
});
