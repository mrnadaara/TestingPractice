module.exports = {
  add: (...args) => {
    let sum = args[0];
    args.forEach((num, index) => {
      if (index !== 0) sum += num;
    });
    return sum;
  },
  subtract: (...args) => {
    let sum = args[0];
    args.forEach((num, index) => {
      if (index !== 0) sum -= num;
    });
    return sum;
  },
  multiply: (...args) => {
    let sum = args[0];
    args.forEach((num, index) => {
      if (index !== 0) sum *= num;
    });
    return sum;
  },
  divide: (...args) => {
    let sum = args[0];
    args.forEach((num, index) => {
      if (index !== 0) sum /= num;
    });
    return sum;
  },
};