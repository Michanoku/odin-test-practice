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

test('Subtract two numbers.', () => {
  expect(calculator.subtract(641, 221)).toBe(420);
});

test('Divide two numbers.', () => {
  expect(calculator.divide(400, 20)).toBe(20);
});

test('Divide two numbers.', () => {
  expect(calculator.divide(64, 32)).toBe(2);
});

test('Multiply two numbers.', () => {
  expect(calculator.multiply(8, 8)).toBe(64);
});

test('Multiply two numbers.', () => {
  expect(calculator.multiply(191, 2)).toBe(382);
});