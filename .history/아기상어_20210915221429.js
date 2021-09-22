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
const queue = [];
Possible.push(res[1]);

const checkDistance = (x, y, goalX, goalY, visit) => {
  visit[x][y] = 1;
  queue.push([x, y]);
  while (!queue.length) {}
};
