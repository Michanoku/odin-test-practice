import { capitalize } from './capitalize.js';

test('Capitalize first letter of string', () => {
  expect(capitalize('michanoku')).toBe('Michanoku');
});