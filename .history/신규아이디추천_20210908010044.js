const id = "abcdefghijklmn.p";
const check = ["-", "_", "."];
let dot = [];
const createNewId = (id) => {
  let new_id = Array.from(id)
    .map((e) => e.toLowerCase())
    .filter((e) => check.includes(e) || e.match(/[0-9]/) || e.match(/[a-zA-Z]/))
    .map((e) => {
      if (e === ".") {
        dot.push(e);
      } else {
        dot = [];
      }
      if (dot.length === 2) {
        dot.pop();
        return "";
      } else {
        return e;
      }
    })
    .filter((e) => !!e)
    .map((e, idx, array) => {
      if ((idx === 0 || idx === array.length - 1) && e === ".") {
        return "";
      } else {
        return e;
      }
    })
    .filter((e) => !!e);
  new_id = new_id.join("");
  if (new_id === "") {
    new_id += "a";
  } else if (new_id.length > 15) {
    new_id = new_id.slice(0, 15);
    if (new_id[new_id.length - 1] === ".") {
      new_id[new_id.length - 1] = "";
    }
  }
  if (new_id.length < 3) {
    while (new_id.length < 3) {
      new_id = new_id + new_id[new_id.length - 1];
    }
  }
  return new_id;
};

console.log(createNewId(id));
