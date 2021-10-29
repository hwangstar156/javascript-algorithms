const totalTicket = 2000;
const logs = [
  "woni request 09:12:29",
  "brown request 09:23:11",
  "brown leave 09:23:44",
  "jason request 09:33:51",
  "jun request 09:33:56",
  "cu request 09:34:02",
];

const solution = (logs, totalTicket) => {
  const splitArr = [];
  logs.forEach((log) => {
    splitArr.push(log.split(" "));
  });
  console.log(splitArr);
};

solution(logs, totalTicket);
