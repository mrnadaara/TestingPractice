const reverse = require('./reverseString');

test('reverse sharmarke', () => {
  expect(reverse('sharmarke')).toBe('ekramrahs');
});

test('reverse ahmed', () => {
  expect(reverse('ahmed')).toBe('demha');
});

test('reverse ali', () => {
  expect(reverse('ali')).toBe('ila');
});

test('return error message if non string value is provided', () => {
  expect(reverse(5)).toBe('please enter a string');
});