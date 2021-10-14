const expression = "100-200*300-500+20";
const checkNumber = /[0-9]/;
const checkOperation = /[-*+]/;

const multiply = (numberArray, index) => {
  const n1 = numberArray[index];
  const n2 = numberArray[index + 1];
  numberArray.splice(index, 2, n1 * n2);
};

function solution(expression) {
  //   const operationArray = Array.from(expression).filter((e) => !e.match(check));
  const operationArray = Array.from(expression).filter(
    (e) => !e.match(checkNumber)
  );
  const numberArray = expression.split(checkOperation).map((e) => Number(e));
  multiply(numberArray, 1);
  console.log(numberArray);
}

solution(expression);
