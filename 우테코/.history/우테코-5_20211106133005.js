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

const dfs = (answer, [r, c], currentValue, rows, columns) => {
  if (r === rows) {
    r = 0;
  }
  if (c === columns) {
    c = 0;
  }
  if (checkAnswer(answer)) {
    return;
  }
  answer[r][c] = currentValue;
  if (currentValue % 2 === 0) {
    dfs(answer, [r + 1, c], currentValue + 1, rows, columns);
  } else {
    dfs(answer, [r, c + 1], currentValue + 1, rows, columns);
  }
};

function solution(rows, columns) {
  const answer = Array.from(Array(rows), () => new Array(columns).fill(0));
  const visit = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      visit.push([]);
    }
  }
  console.log(visit);
  answer[0][0] = 1;
  dfs(answer, [0, 0], 1, rows, columns);
  console.log(answer);
}

const rows = 3;
const columns = 3;

solution(rows, columns);
