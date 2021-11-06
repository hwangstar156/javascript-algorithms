const convertHourToMinutes = (arr) => {
  return Number(arr[0]) * 60 + Number(arr[1]);
};

const checkMaxMinute = (prev, next) => {
  if (next - prev >= 105) {
    return 105;
  } else {
    return next - prev;
  }
};

const convertMinutesToHour = (minutes) => {
  const hour = Math.floor(minutes / 60).toString();
  const minute = (minutes % 60).toString();
  return hour.padStart(2, "0") + ":" + minute.padStart(2, "0");
};

function solution(log) {
  const arr = [];
  let answerValue = 0;
  log.forEach((e) => {
    arr.push(e.split(":"));
  });
  for (let i = 0; i < arr.length - 1; i += 2) {
    const prev = convertHourToMinutes(arr[i]);
    const next = convertHourToMinutes(arr[i + 1]);
    if (next - prev >= 5) {
      const addValue = checkMaxMinute(prev, next);
      answerValue += addValue;
    }
  }
  console.log(convertMinutesToHour(answerValue));
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
