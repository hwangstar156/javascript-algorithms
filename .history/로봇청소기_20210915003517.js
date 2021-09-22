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

const visit = Array.from(Array(n), () => new Array(m).fill(0));
console.log(visit);
