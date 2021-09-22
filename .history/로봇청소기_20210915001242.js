const fs = require("fs");
let input = fs.readFileSync("./test.txt").toString().split("\r\n");

const point = input[0].split(" ");
const n = Number(point[0]);
const m = Number(point[1]);
console.log(n, m);
