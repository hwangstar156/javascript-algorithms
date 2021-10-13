function solution(str1, str2) {
  let answer = 0;

  const set1 = new Set();
  const set2 = new Set();
  const check_char = /[a-zA-Z]/;
  for (let i = 0; i < str1.length - 1; i++) {
    const ch = str1[i] + str1[i + 1];
    ch.split("").forEach((c) => {
      if (c.match(check_char)) {
        set1.add(ch);
      }
    });
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const ch = str2[i] + str2[i + 1];
    ch.split("").forEach((c) => {
      if (c.match(check_char)) {
        console.log(c);
        set2.add(ch);
      }
    });
  }
  console.log(set1, set2);
  return answer;
}

solution("handshake", "shake hands");
