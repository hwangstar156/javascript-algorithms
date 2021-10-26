class Queue {
  constructor() {
    this.queue = [];
    this.rear = 0;
    this.front = 0;
  }

  get size() {
    return this.rear - this.front;
  }

  enqueue = (item) => {
    this.queue[this.rear++] = item;
  };

  dequeue = () => {
    return this.queue[this.front++];
  };

  isEmpty = () => {
    return this.rear === this.front;
  };
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const isSafe = (x, y, visit, queue, board, n) => {
  let cnt = 1;
  visit[x][y] = true;
  queue.enqueue([x, y]);
  while (!queue.isEmpty()) {
    for (let i = 0; i < queue.size; i++) {
      const point = queue.dequeue();
      const prevX = point[0];
      const prevY = point[1];
      for (let j = 0; j < 4; j++) {
        const nx = prevX + dx[j];
        const ny = prevY + dy[j];
        if (nx < 0 || ny < 0 || nx >= n || ny >= n) {
          continue;
        }
        if (!visit[nx][ny] && board[nx][ny] === "O") {
          visit[nx][ny] = true;
          queue.enqueue([nx, ny]);
        }
        if (!visit[nx][ny] && board[nx][ny] === "P") {
          if (cnt <= 2) {
            return false;
          }
        }
      }
    }
    cnt += 1;
  }
  return true;
};

const check = (board, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "P") {
        const visit = Array.from(Array(n), () => new Array(n).fill(false));
        const queue = new Queue();
        const res = isSafe(i, j, visit, queue, board, n);
        if (!res) {
          return false;
        }
      }
    }
  }
  return true;
};

const convertFalseToZero = (result) => {
  return result ? 1 : 0;
};

function solution(places) {
  var answer = [];
  for (let i = 0; i < places.length; i++) {
    const res = check(places[i], places[0].length);
    answer.push(convertFalseToZero(res));
  }
  return answer;
}

const places = [
  ["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"],
  ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"],
  ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"],
  ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
  ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"],
];
