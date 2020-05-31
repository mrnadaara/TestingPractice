const capitalize = require('./capitalize');

test('capitalize sharmarke', () => {
  expect(capitalize('sharmarke')).toBe('Sharmarke');
});

test('capitalize ahmed', () => {
  expect(capitalize('ahmed')).toBe('Ahmed');
});

test('capitalize mohamed', () => {
  expect(capitalize('mohamed')).toBe('Mohamed');
});

test('return error message if non string value is provided', () => {
  expect(capitalize(2)).toBe('please enter a string');
});