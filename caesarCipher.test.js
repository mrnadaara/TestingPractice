const cipher = require('./caesarCipher');

test('Cipher without wrapping text', () => {
  expect(cipher('abc', 3)).toBe('def');
});

test('Cipher with wrapping text', () => {
  expect(cipher('xyz', 3)).toBe('abc');
});

test('cipher with punctuation', () => {
  expect(cipher('charge!', 3)).toBe('fkdujh!');
});