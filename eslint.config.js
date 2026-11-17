// @ts-check
import { defineConfig } from '@inthememory/eslint-config';

export default await defineConfig({
  rules: {},
  // Published Renovate schema requires an object, but renovate 44.222.5
  // still requires a boolean. Keep the boolean the validator accepts.
  todo: [
    {
      files: ['_base.json'],
      rules: {
        'schema/no-invalid': 'off',
      },
    },
  ],
});
