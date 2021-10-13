const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

const mapInfo = input[0].split(" ");
const n = parseInt(mapInfo[0]);
const L = parseInt(mapInfo[1]);
const R = parseInt(mapInfo[2]);
const Map = input
  .slice(1, input.length)
  .map((e) => e.split(" ").map((d) => parseInt(d)));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const dfs = (x, y, value, check) => {
  check[x][y] = value;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= n || ny >= n || check[nx][ny] > 0) {
      continue;
    }
    const target = Math.abs(Map[x][y] - Map[nx][ny]);
    if (target >= L && target <= R) {
      dfs(nx, ny, value, check);
    }
  }
};

const solution = () => {
  let flag = true;

  let cnt = 1;
  const check = Array.from(Array(n), () => new Array(n).fill(0));
  Map.forEach((mapElement, i) => {
    mapElement.forEach((e, j) => {
      if (check[i][j] === 0) {
        dfs(i, j, cnt++, check);
      }
    });
  });
  console.log(check);
};

solution();
