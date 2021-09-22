const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

console.log(input);

class Chain {
  constructor(arr) {
    this.state = arr;
  }

  turnRight = () => {
    const elem = this.state.shift();
    this.state.push(elem);
  };

  turnLeft = () => {
    const elem = this.state.pop();
    this.state.shift(elem);
  };
}

const chain = [];

for (let i = 0; i < 4; i++) {
  chain.push(new Chain(input[i].split("")));
}

const orders = [];

input.splice(5, input.length).forEach((order) => {
  orders.push(order.split(" "));
});

const turnChain = (dir, idx) => {
  console.log(idx);
  if (dir === 1) {
    chain[idx - 1].turnRight();
  } else {
    chain[idx - 1].turnLeft();
  }
};

orders.forEach((order) => {
  const idx = Number(order[0]);
  const dir = Number(order[1]);
  let prevDir;
  let nextDir;
  console.dir(chain[0]);
  turnChain(dir);
  console.log(order);
  prevDir = dir === 1 ? 0 : 1;
  for (let i = idx - 1; i >= 1; i--) {
    if (chain[i].state[6] !== chain[i - 1].state[2]) {
      turnChain(prevDir, i - 1);
      prevDir = prevDir === 1 ? 0 : 1;
    }
  }
  nextDir = dir === 1 ? 0 : 1;
  for (let i = idx - 1; i < 4; i++) {
    if (chain[i].state[2] !== chain[i + 1].state[6]) {
      turnChain(nextDir, i + 1);
      nextDir = nextDir === 1 ? 0 : 1;
    }
  }
});
