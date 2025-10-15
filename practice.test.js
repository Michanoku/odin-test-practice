import { capitalize } from './capitalize.js';
import { reverse } from './reverse.js';

/* eslint-disable no-undef */

// capitalize
test('Capitalize first letter of string.', () => {
  expect(capitalize('michanoku')).toBe('Michanoku');
});

test('Capitalize first letter of string.', () => {
  expect(capitalize('terranigma')).toBe('Terranigma');
});

// reverse
test('Reverse a string.', () => {
  expect(reverse('Michanoku')).toBe('ukonahciM');
});

test('Reverse a string.', () => {
  expect(reverse('Terranigma')).toBe('amginarreT');
});