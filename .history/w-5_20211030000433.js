const totalTicket = 2000;
const logs = [
  "woni request 09:12:29",
  "brown request 09:23:11",
  "brown leave 09:23:44",
  "jason request 09:33:51",
  "jun request 09:33:56",
  "cu request 09:34:02",
];

const inUser = [];
const answer = [];

const isValid = (time) => {
  const num = Number(time[0]) * 60 + Number(time[1]);
  return num >= 540 && num < 599;
};

const calculateTimeValue = (time) => {
  return Number(time[0]) * 3600 + Number(time[1]) * 60 + Number(time[2]);
};

const check = (info) => {
  const order = info[1];
  const infoTime = info[2].split(":");
  if (inUser.length === 0 && order === "request") {
    inUser.push(info);
  } else if (order === "request") {
    const time = inUser[0][2].split(":");
    const name = inUser[0][0];
    if (
      isValid(time) &&
      calculateTimeValue(infoTime) - calculateTimeValue(time) > 60
    ) {
      answer.push(name);
      inUser.pop();
      inUser.push(info);
    }
  } else if (order === "leave") {
    inUser.pop();
  }
};

const solution = (logs, totalTicket) => {
  const splitArr = [];
  logs.forEach((log) => {
    splitArr.push(log.split(" "));
  });
  splitArr.forEach((info) => {
    check(info);
  });
  const lastInfo = inUser.pop();
  if (lastInfo) {
    answer.push(lastInfo[0]);
  }
  console.log(answer);
};

solution(logs, totalTicket);
