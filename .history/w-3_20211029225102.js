const whoIsBig = (ch) => {
  const splitArr = ch.split("");
  const plusValue = splitArr.reduce((total, el) => {
    return total + Number(el);
  }, 0);
  console.log(plusValue);
  const multiplyValue = splitArr.reduce((total, el) => {
    return total * Number(el);
  }, 1);

  return Math.max(plusValue, multiplyValue);
};

whoIsBig("97");
