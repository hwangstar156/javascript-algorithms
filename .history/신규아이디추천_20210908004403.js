const id = "...!@BaT#*..y.abcdefghijklm";
const check = ["-", "_", "."];
let dot = [];
const createNewId = (id) => {
  let new_id = id
    .map((e) => e.toLowerCase())
    .filter(
      (e) => check.includes(e) || typeof e === "number" || typeof e === "string"
    )
    .map((e) => {
      if (e === ".") {
        dot.push(e);
      } else {
        dot = [];
      }
      if (dot.length === 2) {
        dot.pop();
        return "";
      }
    })
    .map((e, idx, array) => {
      if ((idx === 0 || idx === array.length - 1) && e === ".") {
        return "";
      } else {
        return e;
      }
    });

  if (new_id === "") {
    new_id += "a";
  } else if (new_id.length > 15) {
    new_id = new_id.slice(0, 15);
    if (new_id[new_id.length - 1] === ".") {
      new_id[new_id.length - 1] = "";
    }
  } else if (new_id.length < 3) {
    while (new_id.length < 3) {
      new_id = new_id + new_id[new_id.length - 1];
    }
  }
  return new_id;
};

console.log(createNewId(id));
