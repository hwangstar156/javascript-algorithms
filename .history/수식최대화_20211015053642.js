const expression = "100-200*300-500+20";
const checkNumber = /\\|/;
const checkOperation = ["-", "*", "+"];

const multiply = () => {};

function solution(expression) {
  //   const operationArray = Array.from(expression).filter((e) => !e.match(check));
  const numberArray = expression.split();
  console.log(numberArray);
}

solution(expression);
