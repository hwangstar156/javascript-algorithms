const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

const mapInfo = input[0].split(" ");
const n = parseInt(mapInfo[0]);
const L = parseInt(mapInfo[1]);
const R = parseInt(mapInfo[2]);
const Map = input
  .slice(1, input.length)
  .map((e) => e.split(" ").map((d) => parseInt(d)));
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const queue = new Queue();
const ans = {};

class Queue {
  constructor() {
    this.q = {};
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }
  get getQueueSize() {
    return this.size;
  }
  init() {
    this.q = {};
    this.size = 0;
    this.front = 0;
    this.rear = 0;
  }

  push(data) {
    this.q[++this.rear] = data;
    this.size++;
  }

  pop() {
    this.size--;
    return this.q[++this.front];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

const bfs = (x, y, value, check) => {
  queue.push([x, y]);
  check[x][y] = value;
  let cnt = Map[x][y];
  while (queue.getQueueSize()) {
    const Point = queue.pop();
    const x = Point[0];
    const y = Point[1];
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n || check[nx][ny] > 0) {
        continue;
      }
      const target = Math.abs(Map[x][y] - Map[nx][ny]);
      if (target >= L && target <= R) {
        queue.push([nx, ny]);
        check[nx][ny] = value;
        cnt += Map[nx][ny];
      }
    }
  }
  return cnt;
};

const solution = () => {
  let flag = true;
  let cnt = 1;
  while (flag) {
    const check = Array.from(Array(n), () => new Array(n).fill(0));
    Map.forEach((mapElement, i) => {
      mapElement.forEach((e, j) => {
        if (check[i][j] === 0) {
          const sum = bfs(i, j, cnt, check);
          const avg = Math.floor(sum / avg);
          ans[cnt] = avg;
          cnt++;
        }
      });
    });
    console.log(check);
    console.log(ans);
    break;
  }
};

solution();
