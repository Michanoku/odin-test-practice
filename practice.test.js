import { capitalize } from './capitalize.js';
import { reverse } from './reverse.js';

test('Capitalize first letter of string.', () => {
  expect(capitalize('michanoku')).toBe('Michanoku');
});

test('Capitalize first letter of string.', () => {
  expect(capitalize('terranigma')).toBe('Terranigma');
});

test('Reverse a string.', () => {
  expect(reverse('Michanoku')).toBe('ukonahciM');
});