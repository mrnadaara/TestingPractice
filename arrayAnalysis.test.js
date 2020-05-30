const analysis = require('./arrayAnalysis');

test('array provided', () => {
  expect(analysis([9, 8, 7, 6, 5, 4, 3, 2, 1])).toEqual({
    average: 5,
    min: 1,
    max: 9,
    length: 9,
  });
});

test('array not provided', () => {
  expect(analysis([])).toEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});