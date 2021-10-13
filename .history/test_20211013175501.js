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
      set.add(ch.toLowerCase());
    }
  }
};

function solution(str1, str2) {
  let answer = 0;

  controlSet(str1, set1);
  controlSet(str2, set2);
  const setSum = set1.size + set2.size;
  console.log(setSum);
  return answer;
}

solution("handshake", "shake hands");