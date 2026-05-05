import { describe, test, expect } from 'vitest';
import baseJSON from '../_base.json';
import applicationJSON from '../application.json';
import libraryJSON from '../library.json';

describe('Configuration snapshot', () => {
  test('_base.json', () => {
    expect(baseJSON).toMatchSnapshot();
  });
  test('application.json', () => {
    expect(applicationJSON).toMatchSnapshot();
  });
  test('library.json', () => {
    expect(libraryJSON).toMatchSnapshot();
  });
});
