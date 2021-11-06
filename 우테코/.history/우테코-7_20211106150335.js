const b = (start, end, N, M) => {
  const arr = [];
  for (let i = start; i < N; i++) {
    arr.push([i, end]);
  }
  for (let i = 0; i < M; i += 2) {
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
};

function solution(grid, clockwise) {
  b(0, 0, grid.length, grid[grid.length - 1].length);
}

const grid = ["1", "234", "56789"];
const clockwise = true;

solution(grid, clockwise);
