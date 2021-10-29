const whoIsBig = (ch) => {
  const splitArr = ch.split("");
  const plusValue = splitArr.reduce((total, el) => {
    return total + Number(el);
  }, 0);
  const multiplyValue = splitArr.reduce((total, el) => {
    return total * Number(el);
  }, 1);

  return Math.max(plusValue, multiplyValue);
};

console.log(whoIsBig("97"));
