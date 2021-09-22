const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

const n = Number(input[0]);
const Map = [];
for (let i = 1; i < input.length; i++) {
  Map.push(input[i].split(" "));
}

const res = Array.from(Array(6), () => []);
const firstPoint = {
  size: 2,
  point: [],
};

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (Map[i][j] < 7 && Map[i][j] > 0) {
      res[Number(Map[i][j])].push([i, j]);
    } else if (Map[i][j] === "9") {
      firstPoint.point = [i, j];
    }
  }
}
