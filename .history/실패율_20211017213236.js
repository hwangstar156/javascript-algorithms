const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

function solution(N, stages) {
  var answer = [];
  const stageFailArr = new Array(N + 2).fill(0);
  const stageCheckArr = new Array(N + 2).fill(0);
  stages.forEach((stage) => {
    stageFailArr[stage] += 1;
    for (let i = 1; i <= stage; i++) {
      stageCheckArr[i] += 1;
    }
  });
  console.log(stageFailArr, stageCheckArr);
  return answer;
}

solution(N, stages);
