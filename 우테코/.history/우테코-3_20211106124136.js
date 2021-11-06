const convertSplitArray = (arr1, arr2) => {
  arr2.forEach((e) => {
    arr1.push(e.split(" "));
  });
};

function solution(ings, menu, sell) {
  let answer = 0;
  const ingsArr = [];
  const menuArr = [];
  const sellArr = [];
  const answerObj = {};
  const ingsObj = {};
  convertSplitArray(ingsArr, ings);
  convertSplitArray(menuArr, menu);
  convertSplitArray(sellArr, sell);
  ingsArr.forEach((ings) => {
    ingsObj[ings[0]] = Number(ings[1]);
  });
  menuArr.forEach((menu) => {
    let value = 0;
    Array.from(menu[1]).forEach((e) => {
      value += ingsObj[e];
    });
    answerObj[menu[0]] = Number(menu[2]) - value;
  });
  sellArr.forEach((sell) => {
    answer += answerObj[sell[0]] *= sell[1];
  });
  return answer;
}

const ings = ["x 25", "y 20", "z 1000"];
const menu = ["AAAA xyxy 15", "TTT yy 30", "BBBB xx 30"];
const sell = ["BBBB 3", "TTT 2"];

solution(ings, menu, sell);
