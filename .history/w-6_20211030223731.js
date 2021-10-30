let answer = "";
const check = (str) => {
  const deleteArr = {};
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
      strArr[i] = "";
    }
  });
  const newStr = strArr.filter((e) => !!e).join("");
  console.log(newStr);
  if (cnt > 0) {
    check(newStr);
  } else {
    answer = newStr;
  }
};

const solution = (cryptogram) => {
  check(cryptogram);
  console.log(answer);
};

solution("zyelleyz");
