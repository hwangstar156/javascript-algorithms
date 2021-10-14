const expression = "100-200*300-500+20";
const check = /[0-9]/;

const multiply = () => {};

function solution(expression) {
  const numberArray = Array.from(expression).filter((e) => e.match(check));
  console.log(numberArray);
}

solution(expression);
