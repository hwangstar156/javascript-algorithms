const fs = require("fs");
let input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");
console.log(input);
const info = input[0].split(" ");
const Map = [];
for (let i = 1; i < input.length - 1; i++) {
  Map.push(input[i].split(" "));
}
const order = input[input.length - 1].split(" ");
console.log(order);
