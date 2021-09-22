const prevQueue = [];
const curQueue = [];

let cnt = 0;

const colX = [1, -1];
const colY = [0, 0];

const rowX = [0, 0];
const rowY = [1, -1];

const prevVisit = Array.from(Array(100), () => new Array(100).fill(false));
const curVisit = Array.from(Array(100), () => new Array(100).fill(false));
const board = [
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 1, 1],
  [1, 1, 0, 0, 1],
  [0, 0, 0, 0, 0],
];
const rootCoord = [
  [0, 0],
  [0, 1],
];
const bfs = (rootCoord) => {
  prevQueue.push(rootCoord[0]);
  curQueue.push(rootCoord[1]);
  curVisit[rootCoord[1][0]][rootCoord[1][1]] = true;
  while (prevQueue.length) {
    const prevCoord = prevQueue.shift();
    const prevX = prevCoord[0];
    const prevY = prevCoord[1];
    const curCoord = curQueue.shift();
    const curX = curCoord[0];
    const curY = curCoord[1];
    let AddX;
    let AddY;
    if (prevY === curY) {
      AddX = colX.slice();
      AddY = colY.slice();
    } else {
      AddX = rowX.slice();
      AddY = rowY.slice();
    }
    for (let i = 0; i < 2; i++) {
      const nx = curX + AddX[i];
      const ny = curY + AddY[i];
      if (nx < 0 || ny < 0 || nx >= board.length || ny >= board.length) {
        continue;
      }
      if (curVisit[nx][ny] == true || board[nx][ny] === 1) {
        continue;
      }
      prevQueue.push([curX, curY]);
      curQueue.push([nx, ny]);
      prevVisit[curX][curY] = true;
      curVisit[nx][ny] = true;
    }

    for (let i = 0; i < 2; i++) {
      const px = prevX + AddY[i];
      const py = prevY + AddX[i];
      const cx = curX + AddY[i];
      const cy = curY + AddX[i];
      if (px < 0 || py < 0 || px >= board.length || py >= board.length) {
        continue;
      }
      if (cx < 0 || cy < 0 || cx >= board.length || cy >= board.length) {
        continue;
      }
      if (board[px][py] === 0 && board[cx][cy] === 0) {
        if (!visit[cx][cy]) {
          prevQueue.push([curX, curY]);
          curQueue.push([cx, cy]);
          visit[cx][cy] = true;
        }
        if (!visit[px][py]) {
          prevQueue.push([prevX, prevY]);
          curQueue.push([px, py]);
          visit[cx][cy] = true;
        }
      }
    }

    cnt += 1;
  }
};

console.log(bfs(rootCoord));
