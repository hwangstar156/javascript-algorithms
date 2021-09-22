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

const chain = new Array(4);

for (let i = 0; i < 4; i++) {
  chain[i] = input[i].split("");
}

const orders = input.splice(5, input.length);
orders.map((order) => {
  console.log(order);
});
console.log(orders);
