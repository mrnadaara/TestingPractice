const calculator = require('./calc');

test('add 1 and 2', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('add 1 and 2 and 3', () => {
  expect(calculator.add(1, 2, 3)).toBe(6);
});

test('subtract 1 and 2', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test('subtract 3 and 2 and 1', () => {
  expect(calculator.subtract(3, 2, 1)).toBe(0);
});

test('multiply 1 and 2', () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test('multiply 1 and 2 and 3', () => {
  expect(calculator.multiply(1, 2, 3)).toBe(6);
});

test('divide 1 by 2', () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test('divide 5 by 5', () => {
  expect(calculator.divide(5, 5)).toBe(1);
});