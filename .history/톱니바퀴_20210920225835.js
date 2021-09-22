const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

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
    this.state.unshift(elem);
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
  if (dir === 1) {
    chain[idx].turnRight();
  } else {
    chain[idx].turnLeft();
  }
  console.log(chain[idx], dir);
};

orders.forEach((order) => {
  const idx = Number(order[0]);
  const dir = Number(order[1]);
  let prevDir = dir;
  let nextDir = dir;
  turnChain(dir, idx - 1);

  for (let i = idx - 1; i >= 1; i--) {
    if (chain[i].state[6] !== chain[i - 1].state[2]) {
      prevDir = -prevDir;
      turnChain(prevDir, i - 1);
    } else {
      break;
    }
  }
  for (let i = idx - 1; i < 3; i++) {
    if (chain[i].state[2] !== chain[i + 1].state[6]) {
      nextDir = -nextDir;
      turnChain(nextDir, i + 1);
    } else {
      break;
    }
  }
});

let sum = 0;
for (let i = 0; i < 4; i++) {
  if (chain[i].state[0] === "1") {
    switch (i) {
      case 0:
        sum += 1;
        break;
      case 1:
        sum += 2;
        break;
      case 2:
        sum += 4;
        break;
      case 3:
        sum += 8;
        break;
    }
  }
}
console.log(chain);
console.log(sum);
