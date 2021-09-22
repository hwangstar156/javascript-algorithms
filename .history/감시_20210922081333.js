const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

const locationInfo = input[0].split(" ");
console.log(locationInfo);
