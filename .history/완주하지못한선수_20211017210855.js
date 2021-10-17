const completionObject = {};
const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];

function solution(participant, completion) {
  participant.forEach((e) => {
    if (!completionObject[e]) {
      completionObject[e] = 1;
    } else {
      completionObject[e] += 1;
    }
  });
  completion.forEach((e) => {
    completionObject[e] -= 1;
  });
  Object.entries(completionObject).forEach((e) => {
    if (e[1] !== 0) {
      return e[0];
    }
  });
}

console.log(solution(participant, completion));
