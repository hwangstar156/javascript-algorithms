let cnt = 0;

const calculate = (numbers, idx, sum, length, target) => {
  if (idx === length) {
    if (sum === target) {
      cnt += 1;
    }
  } else {
    calculate(numbers, idx + 1, sum + numbers[idx], length, target);
    calculate(numbers, idx + 1, sum - numbers[idx], length, target);
  }
};

function solution(numbers, target) {
  calculate(numbers, 0, 0, numbers.length, target);
  return cnt;
}
