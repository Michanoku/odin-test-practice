import { capitalize } from './capitalize.js';
import { reverse } from './reverse.js';
import { calculator } from './calculator.js';
import { caesarCipher } from './caesar.js';
import { analyzeArray } from './analyze.js';

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

// caesarCipher
test('Test regular cipher.', () => {
  expect(caesarCipher('abc', 5)).toBe('fgh');
});

test('Wrapping.', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Case preservation.', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Punctuation preservation.', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// analyzeArray
test('Analyze array.', () => {
  const object = analyzeArray([1,8,3,4,2,6]);
  expect(object).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});

test('Analyze array.', () => {
  const object = analyzeArray([9,15,2,64,420,69,19,27]);
  expect(object).toEqual({
    average: 78,
    min: 2,
    max: 420,
    length: 8,
  });
});
