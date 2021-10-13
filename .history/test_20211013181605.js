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

  controlSet(str1, set1);
  controlSet(str2, set2);

  console.log(set1, set2);

  return answer;
}

solution("aa1+aa2", "AAAA12");
