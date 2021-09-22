const stackCheck = (s) => {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (!stack) {
        return false;
      }
      stack.pop();
    }
  }
  return !stack.length ? true : false;
};

const reverseStr = (u) => {
  const cutStr = u.substring(1, u.length - 1);
  let newStr = "";
  for (let i = 0; i < cutStr.length; i++) {
    newStr += cutStr[i] === "(" ? ")" : "(";
  }
  return newStr;
};

const strCheck = (p) => {
  if (p == "") {
    return "";
  } else if (stackCheck(p)) {
    return p;
  }
  let countPrev = 0;
  let countNext = 0;
  for (let i = 0; i < p.length; i++) {
    if (p[i] === "(") {
      countPrev += 1;
    } else {
      countNext += 1;
    }
    if (countPrev === countNext) {
      let u = p.slice(0, i + 1);
      let v = p.slice(i + 1, p.length);
      console.log(u);
      console.log(v);
      const result = stackCheck(u);
      if (result) {
        return u + strCheck(v);
      } else {
        return "(" + strCheck(v) + ")" + reverseStr(u);
      }
    }
  }
};

console.log(strCheck(p));
