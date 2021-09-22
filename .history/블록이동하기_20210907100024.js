const prevQueue = [];
const curQueue = [];

let cnt = 0;

const colX = [1, -1];
const colY = [0, 0];

const rowX = [0, 0];
const rowY = [1, -1];

const prevVisit = Array.from(Array(101), () => new Array(101).fill(false));
const curVisit = Array.from(Array(101), () => new Array(101).fill(false));
const visit = Array.from(Array(101), () => new Array(101).fill(false));
const board = [
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1, 0, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
const rootCoord = [
  [0, 0],
  [0, 1],
];

const checkData = (prevX, prevY, curX, curY) => {
  visit.map((elem) => {
    if (
      elem[0].prevX === prevX &&
      elem[0].prevY === prevY &&
      elem[1].curX === curX &&
      elem[1].curY === curY
    ) {
      return true;
    }
  });
  return false;
};

const pushData = (prevX, prevY, curX, curY) => {
  visit.push({ prevX, prevY }, { curX, curY });
};

const bfs = (rootCoord) => {
  debugger;
  prevQueue.push(rootCoord[0]);
  curQueue.push(rootCoord[1]);
  pushData(rootCoord[0][0], rootCoord[0][1], rootCoord[1][0], rootCoord[1][1]);
  while (prevQueue.length) {
    const size = prevQueue.length;
    for (let k = 0; k < size; k++) {
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
        if (checkData(curX, curY, nx, ny) || board[nx][ny] === 1) {
          continue;
        }
        console.log(curX, curY, nx, ny);
        prevQueue.push([curX, curY]);
        curQueue.push([nx, ny]);
        pushData(curX, curY, nx, ny);
        if (nx === board.length - 1 && ny === board.length - 1) {
          return cnt;
        }
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
          if (!checkData(curX, curY, cx, cy)) {
            console.log(curX, curY, cx, cy);
            prevQueue.push([curX, curY]);
            curQueue.push([cx, cy]);
            pushData(curX, curY, cx, cy);
          }
          if (!checkData(prevX, prevY, px, py)) {
            console.log(prevX, prevY, px, py);
            prevQueue.push([prevX, prevY]);
            curQueue.push([px, py]);
            pushData(prevX, prevY, px, py);
          }
          if (cx === board.length - 1 && cy === board.length - 1) {
            return cnt;
          }
        }
      }
    }
    cnt += 1;
  }
};

console.log(bfs(rootCoord));
