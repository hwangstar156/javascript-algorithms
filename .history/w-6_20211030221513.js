const deleteArr = {};
const check = (str) => {
  let s = undefined;
  let end = undefined;
  let start = 0;
  let idx = 0;
  let cnt = 0;
  while (start < str.length) {
    if (str[start] === str[start + 1]) {
      cnt += 1;
      if (!deleteArr[idx]) {
        deleteArr[idx] = [s, 1];
      } else {
        deleteArr[idx][1] += 1;
      }
    } else {
      idx += 1;
    }

    start += 1;
  }
  strArr = Array.from(str);
  Object.values(deleteArr).forEach(([start, len]) => {
    strArr.splice(start, len);
  });
  console.log(strArr);
};

const solution = (cryptogram) => {
  check(cryptogram);
};

solution("browoanoommnaon");
