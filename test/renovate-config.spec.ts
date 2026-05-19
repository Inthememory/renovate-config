import { execFile } from 'node:child_process';
import { join } from 'node:path';
import { promisify } from 'node:util';
import { describe, test } from 'vitest';
import { findRenovateConfigFiles } from './renovate-config-files.js';

const execFileAsync = promisify(execFile);
const root = join(import.meta.dirname, '..');
const renovateConfigValidator = join(
  root,
  'node_modules',
  '.bin',
  'renovate-config-validator',
);
const renovateConfigFiles = findRenovateConfigFiles(root);

async function validateRenovateConfig(configFile: string): Promise<void> {
  await execFileAsync(
    renovateConfigValidator,
    ['--no-global', join(root, configFile)],
    { cwd: root },
  );
}

describe.concurrent('renovate-config-validator', () => {
  test.concurrent.each(renovateConfigFiles)(
    'validates %s',
    async (configFile) => {
      await validateRenovateConfig(configFile);
    },
    90_000,
  );
});
