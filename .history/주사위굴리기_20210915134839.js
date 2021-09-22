const fs = require("fs");
let input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");
console.log(input);
const info = input[0].split(" ");
