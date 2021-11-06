function solution(s) {
  const firstValue = s[0];
  let idx = 0;
  while (true) {
    if (s[idx] !== firstValue) {
      break;
    }
    idx += 1;
  }
  console.log(idx);
}

const s = "aaabbaaa";
