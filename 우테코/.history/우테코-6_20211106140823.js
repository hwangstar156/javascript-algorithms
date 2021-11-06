const regularTimeObj = {
  mon: {
    in: 13,
    out: 18,
  },
  fri: {
    in: 9.5,
    out: 18,
  },
};

const convertStrToNumber = (str) => {
  const timeRange = str.slice(str.length - 2, str.length);
  const time = str.slice(0, str.length - 2);
  let value = Number(time);
  if (timeRange === "PM") {
    value += 12;
  }
  return value;
};

const compareTime = (str, day, value) => {};

const timeMinus = (str, day, value) => {
  let time = 0;
  if (day === "mon") {
    if (
      regularTimeObj[day]["in"] < value &&
      regularTimeObj[day]["out"] > value
    ) {
      time = regularTimeObj[day]["out"] - value;
    } else if (regularTimeObj[day]["in"] > value) {
      time = regularTimeObj[day]["out"] - regularTimeObj[day]["in"];
    }
  }
};

function solution(time, plans) {
  plans.forEach((plan) => {});
}

const times = 3.5;
const plans = [
  ["홍콩", "11PM", "9AM"],
  ["엘에이", "3PM", "2PM"],
];

solution(times, plans);
