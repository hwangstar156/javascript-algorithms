const convertStrToNumber = (str) => {
  const timeRange = str.slice(str.length - 2, str.length);
  const time = str.slice(0, str.length - 2);
  console.log(time);
  if (timeRange === "PM") {
  }
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
