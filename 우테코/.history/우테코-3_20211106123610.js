const convertSplitArray = (arr1, arr2) => {
  arr2.forEach((e) => {
    arr1.push(e.split(" "));
  });
};

function solution(ings, menu, sell) {
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
    console.log(value);
  });
}

const ings = ["r 10", "a 23", "t 124", "k 9"];
const menu = [
  "PIZZA arraak 145",
  "HAMBURGER tkar 180",
  "BREAD kkk 30",
  "ICECREAM rar 50",
  "SHAVEDICE rar 45",
  "JUICE rra 55",
  "WATER a 20",
];
const sell = ["BREAD 5", "ICECREAM 100", "PIZZA 7", "JUICE 10", "WATER 1"];

solution(ings, menu, sell);
