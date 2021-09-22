const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

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

const n = Number(input[0]);
const Map = [];
for (let i = 1; i < input.length; i++) {
  Map.push(input[i].split(" "));
}

const res = Array.from(Array(7), () => []);
const sharkPoint = {
  size: 2,
  point: [],
};
let queue = new Queue();
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (Map[i][j] < 7 && Map[i][j] > 0) {
      res[Number(Map[i][j])].push([i, j]);
    } else if (Map[i][j] === "9") {
      Map[i][j] = "0";
      sharkPoint.point = [i, j];
    }
  }
}

dx = [1, -1, 0, 0];
dy = [0, 0, 1, -1];

const Possible = [];

let visit = Array.from(Array(n), () => new Array(n).fill(0));
res[1].forEach((e) => Possible.push(e));

const checkDistance = (x, y, goalX, goalY, size) => {
  let level = 0;
  visit[x][y] = 1;
  queue.push([x, y]);
  while (!queue.isEmpty()) {
    const qsize = queue.getQueueSize;
    for (let i = 0; i < qsize; i++) {
      const Point = queue.pop();
      for (let j = 0; j < 4; j++) {
        const nx = Point[0] + dx[j];
        const ny = Point[1] + dy[j];
        if (nx === goalX && ny === goalY) {
          visit = Array.from(Array(n), () => new Array(n).fill(0));
          queue.init();
          return level + 1;
        }
        if (nx < 0 || ny < 0 || nx >= n || ny >= n) {
          continue;
        }
        if (!visit[nx][ny] && Number(Map[nx][ny]) <= size) {
          visit[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
    level += 1;
  }
  visit = Array.from(Array(n), () => new Array(n).fill(0));
  queue.init();
  return 99;
};

const sortPossible = (curX, curY, size) => {
  Possible.sort((a, b) => {
    const ans =
      checkDistance(curX, curY, a[0], a[1], size) -
      checkDistance(curX, curY, b[0], b[1], size);
    if (ans !== 0) {
      return ans;
    }
    const ans2 = a[0] - b[0];
    if (ans2 !== 0) {
      return ans2;
    }
    return a[1] - b[1];
  });
};

const solution = () => {
  let time = 0;
  let cnt = 0;
  sortPossible(sharkPoint.point[0], sharkPoint.point[1], sharkPoint.size);
  while (Possible.length) {
    const goalPoint = Possible.shift();

    const len = checkDistance(
      sharkPoint.point[0],
      sharkPoint.point[1],
      goalPoint[0],
      goalPoint[1],
      sharkPoint.size
    );
    if (len === 99) continue;
    time += len;
    sharkPoint.point = goalPoint;
    cnt += 1;
    if (cnt === sharkPoint.size) {
      sharkPoint.size += 1;
      res[sharkPoint.size - 1]?.forEach((e) => Possible.push(e));
      cnt = 0;
    }
    sortPossible(sharkPoint.point[0], sharkPoint.point[1], sharkPoint.size);
  }
  return time;
};

console.log(solution());
