const clapNumber = (num) => {
  const numberCheck = num.toString().split("");
  let cnt = 0;
  for (let i = 0; i < numberCheck.length; i++) {
    if (
      numberCheck[i] === "3" ||
      numberCheck[i] === "6" ||
      numberCheck[i] === "9"
    ) {
      cnt += 1;
    }
  }
  return cnt;
};

const solution = (number) => {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += clapNumber(i);
  }
  return answer;
};

console.log(solution(33));
