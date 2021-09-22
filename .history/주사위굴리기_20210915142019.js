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
    let arr;
    switch(num) {
        case '1' : {
            arr = [left, top,right,bot,front,back];
        }
        case '2' : {
            arr = [right,bot,left,top,front,back];
        }
        case '3' : {
            arr = [front, right, back, left, bot, top];
        }
        case '4' : {
            arr = [back, right, front, left, top, bot];
        }
    }
    return arr;
};

const solution = (x, y) => {
  for (const order of orders) {
      const newArr = 
  }
};
