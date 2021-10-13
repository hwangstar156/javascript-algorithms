const check_char = /[a-zA-Z]/;

const set1 = new Set();
const set2 = new Set();

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
      set.add(ch);
    }
  }
};

function solution(str1, str2) {
  let answer = 0;

  for (let i = 0; i < str1.length - 1; i++) {
    let flag = true;
    const ch = str1[i] + str1[i + 1];
    ch.split("").forEach((c) => {
      if (!c.match(check_char)) {
        flag = false;
      }
    });
    if (flag) {
      set2.add(ch);
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    let flag = true;
    const ch = str2[i] + str2[i + 1];
    ch.split("").forEach((c) => {
      if (!c.match(check_char)) {
        flag = false;
      }
    });
    if (flag) {
      set2.add(ch);
    }
  }

  console.log(set1, set2);
  return answer;
}

solution("handshake", "shake hands");
