const checkNumber = /[0-9]/;
const s = "23four5six7";
const convertStringToNumber = (str) => {
  switch (str) {
    case "zero":
      return "0";
    case "one":
      return "1";
    case "two":
      return "2";
    case "three":
      return "3";
    case "four":
      return "4";
    case "five":
      return "5";
    case "six":
      return "6";
    case "seven":
      return "7";
    case "eight":
      return "8";
    case "nine":
      return "9";
    default:
      return "";
  }
};

function solution(s) {
  var answer = "";
  let save = "";
  let addValue = "";
  Array.from(s).forEach((e) => {
    if (e.match(checkNumber)) {
      answer += e;
    } else {
      save += e;
      addValue = convertStringToNumber(save);
      if (addValue !== "") {
        answer += addValue;
        save = "";
      }
    }
  });
  return answer;
}

console.log(solution(s));
