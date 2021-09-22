const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sum;

rl.on("line", (line) => {
  sum = line.split(" ").reduce((a, b) => Number(a) + Number(b));
}).on("close", () => {
  console.log(sum);
  process.exit();
});
