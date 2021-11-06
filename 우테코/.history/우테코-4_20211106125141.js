function solution(s) {
  const firstValue = s[0];
  let idx = 0;
  while (true) {
    if (s[idx] !== firstValue) {
      break;
    }
    idx += 1;
  }
  const sArr = Array.from(s);
  const v = sArr.splice(0, idx);
  console.log(sArr);
}

const s = "aaabbaaa";

solution(s);
