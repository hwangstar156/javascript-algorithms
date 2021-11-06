const b = (x, y, N, M, isTriangle, idx) => {
  if (idx === grid.length) {
    return;
  }
  const arr = [];
  for (let i = x; i < N; i++) {
    arr.push([i, y]);
  }
  for (let i = x + 2; i < M; i += 2) {
    arr.push([N - 1, i]);
  }
  let n = N - 1;
  let m = M - 1;
  while (true) {
    n -= 1;
    m -= 2;
    if (n != 0) {
      arr.push([n, m]);
    } else {
      break;
    }
  }
  console.log(arr);
  if (isTriangle) {
    b(x + 1, y + 1, N, M - 1, false, idx + 1);
  } else {
    b(x + 1, y + 1, N - 1, Math.floor(M / 2) + 1, true, idx + 1);
  }
};

function solution(grid, clockwise) {
  b(0, 0, grid.length, grid[grid.length - 1].length, true, 0);
}

const grid = ["1", "234", "56789"];
const clockwise = true;

solution(grid, clockwise);
