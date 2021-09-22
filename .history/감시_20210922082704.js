const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

const locationInfo = input[0].split(" ");
const n = Number(locationInfo[0]);
const m = Number(locationInfo[1]);
const Map = input.slice(1, input.length).map((e) => e.split(" "));
const order = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (Map[i][j] !== "0" && Map[i][j] !== "6") {
      order.push({
        x: i,
        y: j,
        value: Map[i][j],
      });
    }
  }
}
console.log(order);

const checkTop = (x, y, Map) => {
  const newMap = [...Map];
  for (let i = x; i >= 0; i--) {
    if (newMap[i][y] === "0") {
      newMap[i][y] = "#";
    } else if (newMap[i][y] === "6") {
      break;
    }
  }
  return newMap;
};

const checkBot = (x, y, Map) => {
  const newMap = [...Map];
  for (let i = x; i < n; i++) {
    if (newMap[i][y] === "0") {
      newMap[i][y] = "#";
    } else if (newMap[i][y] === "6") {
      break;
    }
  }
  return newMap;
};

const checkRight = (x, y, Map) => {
  const newMap = [...Map];
  for (let i = y; i < m; i++) {
    if (newMap[i][y] === "0") {
      newMap[i][y] = "#";
    } else if (newMap[i][y] === "6") {
      break;
    }
  }
  return newMap;
};

const checkLeft = (x, y, Map) => {
  const newMap = [...Map];
  for (let i = y; i >= 0; i--) {
    if (newMap[i][y] === "0") {
      newMap[i][y] = "#";
    } else if (newMap[i][y] === "6") {
      break;
    }
  }
  return newMap;
};

const solution = (idx, Map) => {};
