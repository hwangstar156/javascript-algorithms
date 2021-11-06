const b = (total, x, y, N, M, isTriangle, idx, grid) => {
  if (idx === grid.length) {
    return;
  }
  const arr = [];
  if (x === N && y === M) {
    arr.push(grid[x][y]);
    total.push(arr);
  } else {
    for (let i = x; i <= N; i++) {
      arr.push(grid[i][y]);
    }
    for (let i = x + 2; i <= M; i += 2) {
      arr.push(grid[N - 1][i]);
    }
    let n = N;
    let m = M;
    while (true) {
      n -= 1;
      m -= 2;
      if (n != x) {
        arr.push(grid[n][m]);
      } else {
        break;
      }
    }
    total.push(arr);
    if (isTriangle) {
      b(total, x + 1, y + 1, N, M - 1, false, idx + 1, grid);
    } else {
      b(total, x + 1, y + 1, N - 1, M - 3, true, idx + 1, grid);
    }
  }
};

function solution(grid, clockwise) {
  const total = [];
  b(total, 0, 0, grid.length - 1, grid[grid.length - 1].length - 1, true, 0);
}

const grid = ["1", "234", "56789", "abcdefg"];
const clockwise = true;

solution(grid, clockwise);
