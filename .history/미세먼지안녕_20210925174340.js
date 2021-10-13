const fs = require("fs");
const input = fs.readFileSync("./test.txt", "utf-8").trim().split("\r\n");

const MapInfo = input[0].split(" ");
const r = MapInfo[0];
const c = MapInfo[1];
const goalTime = MapInfo[2];

const Map = input.slice(1, input.length).map((e) => e.split(" ").map(n => parseInt(n)));

const dx = [1,-1,0,0];
const dy = [0,0,1,-1];

const check = (x,y) => {
    for (let i=0; i<4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if(nx < 0 || ny < 0 || nx >= r || ny >= c) {
            continue;
        }
        if(Map[nx][ny] !==0 && Map[nx][ny] !== -1)
    }
}
