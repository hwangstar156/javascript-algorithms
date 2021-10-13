const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

const mapInfo = input[0].split(" ");
const n = parseInt(mapInfo[0]);
const L = parseInt(mapInfo[1]);
const R = parseInt(mapInfo[2]);
const Map = input
  .slice(1, input.length)
  .map((e) => e.split(" ").map((d) => parseInt(d)));

let flag = true;
const check = Array.from(Array(n), () => new Array(n).fill(0));
console.log(check);
// while(flag) {

//     for()
// }
