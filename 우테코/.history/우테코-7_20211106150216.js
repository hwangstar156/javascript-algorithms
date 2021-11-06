const b = (start, end, N, M) => {
  const arr = [];
  for (let i = start; i < N; i++) {
    arr.push([i, end]);
  }
  for (let i = 0; i < M; i += 2) {
    arr.push([N - 1, i]);
  }
  let n = N;
  let m = M;
  while (n != 0) {
    n -= 1;
    m -= 2;
    arr.push([n, m]);
  }
  console.log(arr);
};

function solution(grid, clockwise) {
  b(0, 0, grid.length, grid[grid.length - 1].length);
}

const grid = ["1", "234", "56789"];
const clockwise = true;

solution(grid, clockwise);
