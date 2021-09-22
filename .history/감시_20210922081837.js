const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

const locationInfo = input[0].split(" ");
const n = Number(locationInfo[0]);
const m = Number(locationInfo[1]);
const Map = input.slice(1, input.length).map((e) => e.split(" "));
console.log(Map);
const checkTop = (x, y, Map) => {
  const newMap = [...Map];
  console.log(newMap);
};
