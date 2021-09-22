const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];
const answer = new Array(10).fill([]);
const createPowerSet = (order) => {
  const res = [];

  const dfs = (start = 0, arr = []) => {
    res.push([arr.join("")]);

    for (let i = start; i < order.length; i++) {
      dfs(i + 1, [...arr, order[i]]);
    }
  };
  dfs();
  return res;
};

const result = [];

const ordersPowerSet = orders
  .map((order) => createPowerSet(order))
  .map((elem) => {
    const ans = elem.filter((e) => course.includes(e[0].length));
    return ans;
  })
  .map((elem) => {
    const ans = elem.map((e) => e.concat(1));
    return ans;
  });

ordersPowerSet.forEach((elem) => {
  elem.forEach((e) => {
    const FindElem = result.find((f) => f[0] === e[0]);
    if (FindElem) {
      FindElem[1] += 1;
    } else {
      result.push(e);
    }
  });
});

result.forEach((elem) => {
  answer[elem[0].length].push([elem]);
});
