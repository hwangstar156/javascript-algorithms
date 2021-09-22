const strCheck = (p) => {
  if (p == "") {
    return "";
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
    }
  }
};

const p = "()))((()";
strCheck(p);
