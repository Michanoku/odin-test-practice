import { capitalize } from './capitalize.js';
import { reverse } from './reverse.js';
import { calculator } from './calculator.js';

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

// calculator
test('Add two numbers.', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('Add two numbers.', () => {
  expect(calculator.add(18, 51)).toBe(69);
});

test('Subtract two numbers.', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});
