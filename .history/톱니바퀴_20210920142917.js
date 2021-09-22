const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

console.log(input);

class Chain {
  constructor(arr) {
    this.state = arr;
  }

  turnRight() {
    const elem = this.state.shift();
    this.state.push(elem);
  }

  turnLeft() {
    const elem = this.state.pop();
    this.state.shift(elem);
  }
}

const chain = [];

for (let i = 0; i < 4; i++) {
  chain.push(new Chain(input[i].split("")));
}

const orders = [];

input.splice(5, input.length).forEach((order) => {
  orders.push(order.split(" "));
});

orders.forEach((order) => {
  const idx = Number(order[0]);
  const dir = Number(order[1]);
  console.log(chain[idx - 1]);
});
