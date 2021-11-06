function solution(s) {
  const answer = [];
  const firstValue = s[0];
  let idx = 0;
  while (true) {
    if (s[idx] !== firstValue) {
      break;
    }
    idx += 1;
  }
  const sArr = Array.from(s);
  const slicedStr = sArr.splice(0, idx);
  slicedStr.forEach((e) => {
    sArr.push(e);
  });
  let compareValue = sArr[0];
  let cnt = 0;
  for (let i = 0; i < sArr.length; i++) {
    if (compareValue === sArr[i]) {
      cnt += 1;
    } else {
      compareValue = sArr[i];
      answer.push(cnt);
      cnt = 1;
    }
  }
  answer.push(cnt);
  console.log(answer.sort());
}

const s = "kkkkok";

solution(s);
