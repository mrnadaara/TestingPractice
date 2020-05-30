module.exports = (string) => {
  if (typeof string !== 'string') {
    return 'please enter a string';
  }
  const splittedString = [...string];
  splittedString[0] = splittedString[0].toUpperCase();

  return splittedString.join('');
};