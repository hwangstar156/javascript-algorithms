function solution(arr) {
  const answerArr = new Array(3).fill(0);
  arr.forEach((e) => {
    answerArr[e - 1] += 1;
  });
  console.log(Math.max(answerArr));
}

solution([2, 1, 3, 1, 2, 1]);
