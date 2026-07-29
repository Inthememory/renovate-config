import { execFile } from 'node:child_process';
import path from 'node:path';
import { promisify } from 'node:util';
import { describe, test } from 'vitest';

import { findRenovateConfigFiles } from './renovate-config-files.js';

const execFileAsync = promisify(execFile);
const root = path.join(import.meta.dirname, '..');
const renovateConfigValidator = path.join(
  root,
  'node_modules',
  '.bin',
  'renovate-config-validator',
);
const renovateConfigFiles = findRenovateConfigFiles(root);

async function validateRenovateConfig(configFile: string): Promise<void> {
  await execFileAsync(
    renovateConfigValidator,
    ['--no-global', path.join(root, configFile)],
    { cwd: root },
  );
}

describe.concurrent('renovate-config-validator', () => {
  /* eslint-disable test/expect-expect */
  test.concurrent.each(renovateConfigFiles)(
    'validates %s',
    async (configFile) => {
      await validateRenovateConfig(configFile);
    },
    90_000,
  );
});
