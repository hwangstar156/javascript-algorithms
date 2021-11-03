const calculate = (answer, money, value, cnt) => {
  answer[cnt] += Math.floor(money / value);
  return money % value;
};

const solution = (money) => {
  const answer = new Array(9).fill(0);
  const order = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  order.forEach((e, idx) => {
    money = calculate(answer, money, e, idx);
  });
  console.log(answer);
};

solution(15000);
