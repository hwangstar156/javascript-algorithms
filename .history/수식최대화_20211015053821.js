const expression = "100-200*300-500+20";
const checkNumber = /[0-9]/;
const checkOperation = /[-*+]/;

const multiply = () => {};

function solution(expression) {
  //   const operationArray = Array.from(expression).filter((e) => !e.match(check));
  const numberArray = expression.split(checkOperation);
  console.log(numberArray);
}

solution(expression);
