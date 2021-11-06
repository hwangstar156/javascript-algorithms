function solution(s) {
  const firstValue = s[0];
  let idx = 0;
  while (true) {
    if (s[idx] !== firstValue) {
      break;
    }
    idx += 1;
  }
  const v = Array.from(s).splice(0, idx);
  console.log(s);
}

const s = "aaabbaaa";

solution(s);
