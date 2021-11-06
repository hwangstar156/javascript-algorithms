function solution(arr) {
  const answer = [];
  const answerArr = new Array(3).fill(0);
  arr.forEach((e) => {
    answerArr[e - 1] += 1;
  });
  const maxValue = Math.max.apply(null, answerArr);
  for (let i = 0; i < 3; i++) {
    answer.push(maxValue - answerArr[i]);
  }
  return answer;
}
