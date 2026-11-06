import { describe, expect, test } from 'vitest';

import security from '../preset/security.json';

describe('security preset', () => {
  test('version bumps keep a release-age cooldown', () => {
    expect(security.minimumReleaseAge).toBe('2 days');
    expect(security.packageRules).toContainEqual({
      matchUpdateTypes: ['major'],
      minimumReleaseAge: '7 days',
    });
  });

  test('lock file maintenance is not held by minimum release age', () => {
    expect(security.lockFileMaintenance.minimumReleaseAge).toBeNull();
  });
});
