const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().split("\r\n");

const Rect = input[0].split(" ");
const n = Number(Rect[0]); //세로
const m = Number(Rect[1]); //가로

const point = input[1].split(" ");
const x = Number(point[0]);
const y = Number(point[1]);
const dir = Number(point[2]);

const Map = [];

input.forEach((e, idx) => {
  if (idx > 1) {
    Map.push(e.split(" "));
  }
});

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const visit = Array.from(Array(n + 1), () => new Array(m + 1).fill(0));

const getLeft = (dir) => {
  const result = dir - 1 < 0 ? 3 : dir - 1;
  return result;
};

let res;
const solution = (x, y, dir, cnt) => {
  visit[x][y] = 1;
  let flag = true;
  for (let i = 0; i < 4; i++) {
    const nextPosition = getLeft(dir);
    const nx = x + dx[nextPosition];
    const ny = y + dy[nextPosition];
    if (Map[nx][ny] === "0" && visit[nx][ny] === 0) {
      flag = false;
      visit[nx][ny] = 1;
      solution(nx, ny, nextPosition, cnt + 1);
      break;
    } else {
      dir = nextPosition;
    }
  }
  if (flag) {
    const backPoint = getLeft(getLeft(dir));
    const nx = x + dx[backPoint];
    const ny = y + dy[backPoint];
    if (Map[nx][ny] === "1") {
      res = cnt;
      return;
    } else {
      solution(nx, ny, backPoint, cnt);
    }
  }
};
debugger;
solution(x, y, dir, 1);
console.log(res);
