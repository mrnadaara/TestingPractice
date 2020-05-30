module.exports = (array) => {
  const { length } = array;
  let average = null;
  let min = null;
  let max = null;
  if (length !== 0) {
    min = Math.min(...array);
    max = Math.max(...array);
    let sum = 0;
    array.forEach((value) => {
      sum += value;
    });
    average = sum / length;
  }
  return {
    average,
    min,
    max,
    length,
  };
};
