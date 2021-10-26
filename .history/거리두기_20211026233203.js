class Queue {
  constructor() {
    this.queue = [];
    this.rear = 0;
    this.front = 0;
  }

  push = (item) => {
    this.queue[this.rear++] = item;
  };

  pop = () => {
    return this.queue[this.front++];
  };

  isEmpty = () => {
    return this.rear === this.front;
  };
}

const bfs = (x, y) => {};

function solution(places) {
  var answer = [];
  return answer;
}

const places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];
