module.exports = (string) => {
  if (typeof string !== 'string') {
    return 'please enter a string';
  }
  const splittedString = [...string];

  return splittedString.reverse().join('');
};