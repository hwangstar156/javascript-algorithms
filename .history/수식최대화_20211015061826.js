const expression = "100-200*300-500+20";
const checkNumber = /[0-9]/;
const checkOperation = /[-*+]/;

const operationOrders = [
  ["*", "+", "-"],
  ["*", "-", "+"],
  ["+", "*", "-"],
  ["+", "-", "*"],
  ["-", "+", "*"],
  ["-", "*", "+"],
];

const caculateTwoNumber = (numberArray, index, operation) => {
  const n1 = numberArray[index];
  const n2 = numberArray[index + 1];
  if (operation === "*") {
    numberArray.splice(index, 2, n1 * n2);
  } else if (operation === "-") {
    numberArray.splice(index, 2, n1 - n2);
  } else if (operation === "+") {
    numberArray.splice(index, 2, n1 + n2);
  }
};

const deleteOperation = (operationArray, index) => {
  operationArray.splice(index, 1);
};

const linearSearch = (numberArray, operationArray, operation) => {
  operationArray.forEach((op) => {
    if (op === operation) {
      caculateTwoNumber(numberArray, operationArray, operation);
      deleteOperation(operationArray);
      linearSearch(numberArray, operationArray, operation);
    }
  });
};

function solution(expression) {
  const valueArray = [];
  const operationArray = Array.from(expression).filter(
    (e) => !e.match(checkNumber)
  );
  const numberArray = expression.split(checkOperation).map((e) => Number(e));
  linearSearch(numberArray, operationArray, "*");
  console.log(operationArray);
}

solution(expression);
