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

function solution(log) {
  const arr = [];
  let answerValue = 0;
  log.forEach((e) => {
    arr.push(e.split(":"));
  });
  for (let i = 0; i < arr.length - 1; i += 2) {
    const prev = convertHourToMinutes(arr[i]);
    const next = convertHourToMinutes(arr[i + 1]);
    console.log(prev, next);
    if (next - prev >= 5) {
      const addValue = checkMaxMinute(prev, next);
      answerValue += addValue;
    }
  }
  console.log(answerValue);
}

const log = ["01:00", "08:00", "15:00", "15:04", "23:00", "23:59"];
solution(log);
