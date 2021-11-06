const convertStrToNumber = (str) => {
  const time = str.slice(str.length - 2, str.length);
  console.log(time);
};

function solution(time, plans) {
  plans.forEach((plan) => {
    convertStrToNumber(plan[1]);
  });
}

const times = 3.5;
const plans = [
  ["홍콩", "11PM", "9AM"],
  ["엘에이", "3PM", "2PM"],
];

solution(times, plans);
