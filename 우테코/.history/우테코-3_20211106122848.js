function solution(ings, menu, sell) {
  const ingsArr = [];
  ings.forEach((ing) => {
    ingsArr.push(ing.split(" "));
  });
  console.log(ingsArr);
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
