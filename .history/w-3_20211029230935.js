const whoIsBig = (a, b) => {
  return Math.max(a, b);
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

const isRightPage = (arr) => {
  return arr[1] - arr[0] === 1;
};

const solution = (pobi, crong) => {
  if (isRightPage(pobi) && isRightPage(crong)) {
    const pobiLeft = comparePlusAndMultiply(pobi[0].toString());
    const pobiRight = comparePlusAndMultiply(pobi[1].toString());
    const pobiValue = whoIsBig(
      whoIsBig(pobiLeft.plusValue, pobiLeft.multiplyValue),
      whoIsBig(pobiRight.plusValue, pobiRight.multiplyValue)
    );

    const crongLeft = comparePlusAndMultiply(crong[0].toString());
    const crongRight = comparePlusAndMultiply(crong[1].toString());
    const crongValue = whoIsBig(
      whoIsBig(crongLeft.plusValue, crongLeft.multiplyValue),
      whoIsBig(crongRight.plusValue, crongRight.multiplyValue)
    );
    console.log(pobiValue, crongValue);
    if (pobiValue > crongValue) {
      return 1;
    } else if (pobiValue < crongValue) {
      return 2;
    }
    return 0;
  }
  return -1;
};

console.log(solution([101, 102], [211, 212]));
