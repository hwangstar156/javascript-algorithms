const clapNumber = (num) => {
  const numberCheck = num.toString().split("");
  for (let i = 0; i < numberCheck.length; i++) {
    if (
      numberCheck[i] === "3" ||
      numberCheck[i] === "6" ||
      numberCheck[i] === "9"
    ) {
      return true;
    }
  }
  return false;
};

const solution = (number) => {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    if (clapNumber(i)) {
      answer += 1;
    }
  }
  return answer;
};

console.log(solution(13));
