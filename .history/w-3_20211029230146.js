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

const solution = (pobi, crong) => {
  const { pobiPlusLeft, pobiMultiplyLeft } = comparePlusAndMultiply(
    pobi[0].toString()
  );
  const { pobiPlusRight, pobiMultiplyRight } = comparePlusAndMultiply(
    pobi[1].toString()
  );
  const pobiValue = whoIsBig(
    whoIsBig(pobiMultiplyLeft, pobiPlusLeft),
    whoIsBig(pobiMultiplyRight, pobiPlusRight)
  );

  const { crongPlusLeft, crongMultiplyLeft } = comparePlusAndMultiply(
    crong[0].toString()
  );
  const { crongPlusRight, crongMultiplyRight } = comparePlusAndMultiply(
    crong[1].toString()
  );
  const crongValue = whoIsBig(
    whoIsBig(crongMultiplyLeft, crongPlusLeft),
    whoIsBig(crongMultiplyRight, crongPlusRight)
  );

  if (pobiValue > crongValue) {
    return 1;
  } else if (pobiValue < crongValue) {
    return 2;
  }
  return 0;
};

console.log(solution([97, 98], [197, 198]));
