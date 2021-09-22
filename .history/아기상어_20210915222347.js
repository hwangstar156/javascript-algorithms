const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

const n = Number(input[0]);
const Map = [];
for (let i = 1; i < input.length; i++) {
  Map.push(input[i].split(" "));
}

const res = Array.from(Array(6), () => []);
const sharkPoint = {
  size: 2,
  point: [],
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (Map[i][j] < 7 && Map[i][j] > 0) {
      res[Number(Map[i][j])].push([i, j]);
    } else if (Map[i][j] === "9") {
      Map[i][j] = "0";
      sharkPoint.point = [i, j];
    }
  }
}

dx = [1, -1, 0, 0];
dy = [0, 0, 1, -1];

const Possible = [];
let queue = [];
Possible.push(res[1]);

const checkDistance = (x, y, goalX, goalY, visit, size) => {
  let level = 0;
  visit[x][y] = 1;
  queue.push([x, y]);
  while (!queue.length) {
    const qsize = queue.length;
    for (let i = 0; i < qsize; i++) {
      const Point = queue.shift();
      for (let j = 0; j < 4; j++) {
        const nx = Point[0] + dx[j];
        const ny = Point[1] + dy[j];
        if (nx === goalX && ny === goalY) {
          queue = [];
          return level;
        }
        if (nx < 0 || ny < 0 || nx >= n || ny >= n) {
          continue;
        }
        if (!visit[nx][ny] && Number(Map[nx][ny]) <= size) {
          visit[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
    level += 1;
  }
};
