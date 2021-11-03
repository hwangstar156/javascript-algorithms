function solution(brown, yellow) {
  for (let i = 3; i < Math.floor(brown / 2); i++) {
    if (yellow % (i - 2) === 0) {
      const j = yellow / (i - 2) + 2;
      if (brown + yellow === i * j) {
        if (i >= j) {
          return [i, j];
        } else {
          return [j, i];
        }
      }
    }
  }
}
