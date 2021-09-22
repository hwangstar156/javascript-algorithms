const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];
const createPowerSet = (order) => {
  const res = [];

  const dfs = (start = 0, arr = []) => {
    res.push(arr);

    for (let i = start; i < order.length; i++) {
      dfs(i + 1, [...arr, order[i], 1]);
    }
  };
  dfs();
  return res;
};

const result = orders
  .map((order) => createPowerSet(order))
  .map((elem) => {
    const ans = elem.filter((e) => course.includes(e.length));
    return ans;
  });
