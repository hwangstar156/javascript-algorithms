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
  operationArray.forEach((op, idx) => {
    if (op === operation) {
      caculateTwoNumber(numberArray, idx, operation);
      deleteOperation(operationArray, idx);
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
  for (let i = 0; i < operationOrders.length; i++) {
    const newNumberArray = numberArray.slice(0, numberArray.length);
    const newOperationArray = operationArray.slice(0, operationArray.length);
    for (let j = 0; j < operationOrders[i].length; j++) {
      linearSearch(newNumberArray, newOperationArray, operationOrders[i][j]);
    }
    valueArray.push(Math.abs(numberArray[0]));
  }
  console.log(Math.max(valueArray));
}

solution(expression);
