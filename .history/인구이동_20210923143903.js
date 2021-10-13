const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

const mapInfo = input[0].split(" ");
const n = parseInt(mapInfo[0]);
const L = parseInt(mapInfo[1]);
const R = parseInt(mapInfo[2]);
const Map = input
  .slice(1, input.length)
  .map((e) => e.split(" ").map((d) => parseInt(d)));



const solution = (flag) => {
    let flag = true;
const dx = [0,1];
const dy = [1,0];
    while(flag) {
        const check = Array.from(Array(n), () => new Array(n).fill(0));
        Map.forEach((mapElement, i) => {
            mapElement.forEach((e, j) => {
                for(let k=0; k<2; k++) {
                    const nx = i + dx[k];
                    const ny = j + dy[k];
                    if(nx < 0 || ny < 0 || nx >= )
                }
            })
        })
    }
}

