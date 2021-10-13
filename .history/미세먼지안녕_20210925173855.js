const fs = require("fs");
const input = fs.readFileSync("./test.txt").trim().split("\r\n");

const MapInfo = input[0].split(" ");
const r = MapInfo[0];
const c = MapInfo[1];
const goalTime = MapInfo[2];

const Map = input.slice(1, input.length).map((e) => e.split(" "));

console.log(r, c, goalTime);
console.log(Map);
