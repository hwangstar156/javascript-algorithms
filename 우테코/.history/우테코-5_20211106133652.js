const checkAnswer = (answer) => {
  let flag = true;
  answer.forEach((elem) => {
    elem.forEach((e) => {
      if (e === 0) {
        flag = false;
      }
    });
  });
  return flag;
};

const EvenOrOdd = (cur) => {
  if (cur % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

const dfs = (answer, [r, c], currentValue, rows, columns, visit) => {
  if (r === rows) {
    r = 0;
  }
  if (c === columns) {
    c = 0;
  }
  if (checkAnswer(answer) || visit[r][c].includes(EvenOrOdd(currentValue))) {
    return;
  }
  answer[r][c] = currentValue;
  visit[r][c].push(EvenOrOdd(currentValue));
  if (currentValue % 2 === 0) {
    dfs(answer, [r + 1, c], currentValue + 1, rows, columns, visit);
  } else {
    dfs(answer, [r, c + 1], currentValue + 1, rows, columns, visit);
  }
};

function solution(rows, columns) {
  const answer = Array.from(Array(rows), () => new Array(columns).fill(0));
  const visit = [];
  for (let i = 0; i < rows; i++) {
    const subArr = [];
    for (let j = 0; j < columns; j++) {
      subArr.push([]);
    }
    visit.push(subArr);
  }

  dfs(answer, [0, 0], 1, rows, columns, visit);
  console.log(answer);
}

const rows = 3;
const columns = 4;

solution(rows, columns);
