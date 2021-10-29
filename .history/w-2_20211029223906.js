const convertAlphaUpper = (ch) => {
  const diff = ch.charCodeAt(0) - 65;

  const convertAscii = "Z".charCodeAt(0) - diff;
  const convertChar = String.fromCharCode(convertAscii);

  return convertChar;
};

const convertAlphaLower = (ch) => {
  const diff = ch.charCodeAt(0) - "a".charCodeAt(0);

  const convertAscii = "z".charCodeAt(0) - diff;
  const convertChar = String.fromCharCode(convertAscii);

  return convertChar;
};

const solution = (word) => {
  const lowerCheck = /[a-z]/;
  const upperCheck = /[A-Z]/;

  const answer = Array.from(word).map((ch) => {
    if (ch.match(lowerCheck)) {
      return convertAlphaLower(ch);
    } else if (ch.match(upperCheck)) {
      return convertAlphaUpper(ch);
    } else {
      return ch;
    }
  });

  answer = answer.join("");
  console.log(answer);
};

solution("I love you");
