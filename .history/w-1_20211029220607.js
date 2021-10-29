const calculate = (answer, money, value, cnt) => {
  answer[cnt] += Math.floor(money / value);
  return money % value;
};

const solution = (money) => {
  const answer = new Array(9).fill(0);

  money = calculate(answer, money, 50000, 0);
  money = calculate(answer, money, 10000, 1);
  money = calculate(answer, money, 5000, 2);
  money = calculate(answer, money, 1000, 3);
  money = calculate(answer, money, 500, 4);
  money = calculate(answer, money, 100, 5);
  money = calculate(answer, money, 50, 6);
  money = calculate(answer, money, 10, 7);
  money = calculate(answer, money, 1, 8);
  console.log(answer);
};

solution(50237);
