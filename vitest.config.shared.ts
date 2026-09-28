import { defineConfigWith } from '@inthememory/vitest-config';

/**
 * Shared Vitest `defineConfig` for renovate-config.
 *
 * Root `vitest.config.ts` imports this instead of `vitest/config` directly.
 */
export const defineConfig = defineConfigWith({});

export default defineConfig({});
