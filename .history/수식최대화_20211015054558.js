const expression = "100-200*300-500+20";
const checkNumber = /[0-9]/;
const checkOperation = /[-*+]/;

const multiply = () => {};

function solution(expression) {
  //   const operationArray = Array.from(expression).filter((e) => !e.match(check));
  const operationArray = Array.from(expression).filter(
    (e) => !e.match(checkNumber)
  );
  const numberArray = expression.split(checkOperation);
  const newArr = numberArray.splice(1, 2, 5909);
  console.log(numberArray);
  console.log(newArr);
}

solution(expression);
