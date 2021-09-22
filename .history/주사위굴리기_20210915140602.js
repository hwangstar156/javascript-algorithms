const fs = require("fs");
let input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");
console.log(input);
const info = input[0].split(" ");
const n = Number(info[0]);
const m = Number(info[1]);

const Map = [];
for (let i = 1; i < input.length - 1; i++) {
  Map.push(input[i].split(" "));
}
const orders = input[input.length - 1].split(" ");

const dice = {
  top: 0,
  bot: 0,
  right: 0,
  left: 0,
  front: 0,
  back: 0,
};

const move = (num) => {
  const { top, right, left, bot, front, back } = dice;
  if (num < 3) {
    const arr = [top, right, bot, left];
  } else {
    const arr = [top, front, bot, back];
  }
};

const solution = (x, y) => {
  for (const order of orders) {
  }
};
