const deleteArr = {};
const check = (str) => {
  let start = 0;
  let idx = 0;
  let cnt = 0;
  while (start < str.length) {
    if (str[start] === str[start + 1]) {
      cnt += 1;
      if (!deleteArr[idx]) {
        deleteArr[idx] = [start, 2];
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
    for (let i = start; i < start + len; i++) {
      str[i] = "";
    }
  });

  console.log(str);
  console.log(deleteArr);
};

const solution = (cryptogram) => {
  check(cryptogram);
};

solution("browoanoommnaon");
