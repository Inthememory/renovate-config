import { describe, expect, test } from 'vitest';

import baseJSON from '../_base.json';
import defaultJSON from '../default.json';

describe('Configuration snapshot', () => {
  test('_base.json', () => {
    expect(baseJSON).toMatchSnapshot();
  });
  test('library.json', () => {
    expect(defaultJSON).toMatchSnapshot();
  });
});
