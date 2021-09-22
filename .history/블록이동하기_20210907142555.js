const prevQueue = [];
const curQueue = [];

let cnt = 0;

const colX = [1, -1];
const colY = [0, 0];

const rowX = [0, 0];
const rowY = [1, -1];

const visit = new Set(["0001"]);
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

const bfs = (rootCoord) => {
  prevQueue.push(rootCoord[0]);
  curQueue.push(rootCoord[1]);
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
        const key = `${curX}${curY}${nx}${ny}`;
        if (!visit.has(key)) {
          console.log(curX, curY, nx, ny);
          prevQueue.push([curX, curY]);
          curQueue.push([nx, ny]);
          visit.add(key);
        }
        if (
          (nx === board.length - 1 && ny === board.length - 1) ||
          (curX === board.length - 1 && curY === board.length - 1)
        ) {
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
          const key1 = `${curX}${curY}${cx}${cy}`;
          const key2 = `${prevX}${prevY}${px}${py}`;
          if (!visit.has(key1)) {
            console.log(curX, curY, cx, cy);
            prevQueue.push([curX, curY]);
            curQueue.push([cx, cy]);
            visit.add(key1);
          }
          if (!visit.has(key2)) {
            console.log(prevX, prevY, px, py);
            prevQueue.push([prevX, prevY]);
            curQueue.push([px, py]);
            visit.add(key2);
          }
          if (
            (cx === board.length - 1 && cy === board.length - 1) ||
            (curX === board.length - 1 && curY.length - 1)
          ) {
            return cnt;
          } else if (
            (px === board.length - 1 && px === board.length - 1) ||
            (prevX === board.length - 1 && cur)
          ) {
            return cnt;
          }
        }
      }
    }
    console.log("cut");
    cnt += 1;
  }
};

console.log(bfs(rootCoord) + 1);
