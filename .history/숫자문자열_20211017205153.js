const checkNumber = /[0-9]/;
const s = "one4seveneight";
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
  Array.from(s).forEach((e) => {
    if (e.match(checkNumber)) {
      answer += convertStringToNumber(save);
      save = "";
      answer += e;
    } else {
      save += e;
    }
  });
  return answer;
}

solution(s);
