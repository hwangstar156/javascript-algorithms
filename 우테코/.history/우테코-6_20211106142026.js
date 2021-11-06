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

const timeMinus = (day, value) => {
  let time = 0;
  if (day === "fri") {
    if (
      regularTimeObj[day]["in"] < value &&
      regularTimeObj[day]["out"] > value
    ) {
      time = regularTimeObj[day]["out"] - value;
    } else if (regularTimeObj[day]["in"] > value) {
      time = regularTimeObj[day]["out"] - regularTimeObj[day]["in"];
    }
  } else {
    if (
      regularTimeObj[day]["in"] < value &&
      regularTimeObj[day]["out"] > value
    ) {
      time = value - regularTimeObj[day]["in"];
    } else if (regularTimeObj[day]["out"] < value) {
      time = regularTimeObj[day]["out"] - regularTimeObj[day]["in"];
    }
  }
  return time;
};

function solution(times, plans) {
  let answer = "";
  plans.forEach((plan) => {
    const goTime = timeMinus("fri", convertStrToNumber(plan[1]));
    const arriveTime = timeMinus("mon", convertStrToNumber(plan[2]));
    console.log(goTime, arriveTime);
    times -= goTime + arriveTime;
    if (times >= 0) {
      answer = plan[0];
    } else {
      return;
    }
  });
  return answer;
}

const times = 3.5;
const plans = [
  ["홍콩", "11PM", "9AM"],
  ["엘에이", "3PM", "2PM"],
];

solution(times, plans);
