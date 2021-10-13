const check_char = /[a-zA-Z]/;

const set1 = {};
const set2 = {};

const controlSet = (str, set) => {
  for (let i = 0; i < str.length - 1; i++) {
    let flag = true;
    const ch = str[i] + str[i + 1];
    ch.split("").forEach((c) => {
      if (!c.match(check_char)) {
        flag = false;
      }
    });
    if (flag) {
      if (!set[ch.toLowerCase()]) {
        set[ch.toLowerCase()] = 1;
      } else {
        set[ch.toLowerCase()] += 1;
      }
    }
  }
};

function solution(str1, str2) {
  let answer = 0;
  const save = [];
  controlSet(str1, set1);
  controlSet(str2, set2);
  let unionSetCnt = 0;
  let overlapSetCnt = 0;
  Object.entries(set1).forEach((elem1) => {
    Object.entries(set2).forEach((elem2) => {
      if (elem1[0] === elem2[0]) {
        overlapSetCnt += Math.min(elem1[1], elem2[1]);
        unionSetCnt += Math.max(elem1[1], elem2[1]);
        save.push(elem1[0]);
      }
    });
  });

  Object.entries(set1).forEach((elem1) => {
    if (!save.includes(elem1[0])) {
      unionSetCnt += elem1[1];
    }
  });

  Object.entries(set2).forEach((elem2) => {
    if (!save.includes(elem2[0])) {
      unionSetCnt += elem2[1];
    }
  });
  console.log(Math.floor((overlapSetCnt / unionSetCnt) * 65534));
  return answer;
}

solution("aa1+aa2", "AAAA12");
