const m = 4;
const n = 5;
const board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];

const boardMap = [];

board.forEach((line) => {
  boardMap.push(line.split(""));
});

console.log(boardMap);
