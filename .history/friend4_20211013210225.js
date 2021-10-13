const m = 4;
const n = 5;
const board = ["CCBDE", "AAADE", "AAABF", "CCBBF"];

const Map = [];

board.forEach((line) => {
  Map.push(line.split(""));
});

console.log(Map);
