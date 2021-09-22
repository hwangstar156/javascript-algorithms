const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

const n = Number(input[0]);
const Map = [];
for (let i = 1; i < input.length; i++) {
  Map.push(input[i].split(" "));
}
console.log(Map);
const res = Array.from(Array(6), () => []);
let firstPoint;
console.log(res);
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (Map[i][j] < 7) {
      res[Number(Map[i][j])].push([i, j]);
    } else {
      firstPoint = [i, j];
    }
  }
}

console.log(res);
