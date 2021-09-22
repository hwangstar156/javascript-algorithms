const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];
const createPowerSet = (order) => {
  const res = [];

  const dfs = (start = 0, arr = []) => {
    if (course.includes(order.length)) {
      res.push(arr);
    }

    for (let i = start; i < order.length; i++) {
      dfs(i + 1, [...arr, order[i]]);
    }
  };
  dfs();
  return res;
};

orders.map((order) => console.log(createPowerSet(order)));
