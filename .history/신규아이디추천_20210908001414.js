const id = "...!@BaT#*..y.abcdefghijklm";
const check = ["-", "_", "."];
const createNewId = (id) => {
  const new_id = id
    .map((e) => e.toLowerCase())
    .filter(
      (e) => check.includes(e) || typeof e === "number" || typeof e === "string"
    );
};
