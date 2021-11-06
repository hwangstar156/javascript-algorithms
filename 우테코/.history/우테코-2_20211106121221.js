const convertHourToMinutes = (arr) => {
  return Number(arr[0]) + arr[1];
};

function solution(log) {
  const arr = [];
  log.forEach((e) => {
    arr.push(e.split(":"));
  });
  for (let i = 0; i < arr.length - 1; i++) {
    console.log(convertHourToMinutes(arr[i]));
  }
}

const log = [
  "08:30",
  "09:00",
  "14:00",
  "16:00",
  "16:01",
  "16:06",
  "16:07",
  "16:11",
];
solution(log);
