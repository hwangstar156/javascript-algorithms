const m = 4;
const n = 5;
const board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];

let answer = 0;
let boardMap = [];
let flag = true;

board.forEach((line) => {
  boardMap.push(line.split(""));
});

const convertMap = () => {
  const Map = [];
  for (let i = 0; i < n; i++) {
    const subMap = [];
    for (let j = m - 1; j >= 0; j--) {
      if (boardMap[j][i] !== 0) {
        subMap.push(boardMap[j][i]);
      }
    }
    Map.push(subMap);
  }
  const newMap = [];

  for (let i = 0; i < m; i++) {
    const subNewMap = [];
    for (let j = 0; j < n; j++) {
      if (Map[j]?.[i]) {
        subNewMap.push(Map[j][i]);
      } else {
        subNewMap.push(0);
      }
    }
    newMap.push(subNewMap);
  }

  return newMap.reverse();
};

const solution = () => {
  while (flag) {
    flag = false;
    const subSet = new Set();
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (i + 1 >= m || j + 1 >= n) {
          continue;
        }
        const checkArr = new Set();
        const deletedPoint = [];
        for (let p = 0; p < 2; p++) {
          for (let q = 0; q < 2; q++) {
            checkArr.add(board[i + p][j + q]);
            deletedPoint.push([i + p, j + q]);
          }
        }

        if (checkArr.size === 1) {
          flag = true;
          deletedPoint.forEach((point) => {
            subSet.add(point);
          });
        }
      }
    }
    answer += subSet.size;
    subSet.forEach((point) => {
      boardMap[point[0]][point[1]] = 0;
    });
    boardMap = convertMap();
  }
  console.log("dww");
};

solution();
