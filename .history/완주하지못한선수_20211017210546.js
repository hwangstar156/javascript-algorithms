const completionObject = {};
const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];
function solution(participant, completion) {
  var answer = "";
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
    console.log(e);
  });
  return answer;
}

solution(participant, completion);
