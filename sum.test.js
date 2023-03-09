const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const subtract = require('./subtract');

test('subtracts 2 - 1 to equal 1', () => {
  expect(subtract(2, 1)).toBe(1);
});


const multiply = require('./multiply');

test('multiplies 1 * 2 to equal 2', () => {
  expect(multiply(1, 2)).toBe(2);
});

const divide = require('./divide');

test('divides 4/2 to equal 2', () => {
  expect(divide(4, 2)).toBe(2);
});