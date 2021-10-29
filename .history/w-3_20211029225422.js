const whoIsBig = (ch) => {
  const { plusValue, multiplyValue } = comparePlusAndMultiply(ch);
  return Math.max(plusValue, multiplyValue);
};

const comparePlusAndMultiply = (ch) => {
  const splitArr = ch.split("");
  const plusValue = splitArr.reduce((total, el) => {
    return total + Number(el);
  }, 0);
  const multiplyValue = splitArr.reduce((total, el) => {
    return total * Number(el);
  }, 1);

  return { plusValue, multiplyValue };
};

const solution = (pobi, crong) => {};
