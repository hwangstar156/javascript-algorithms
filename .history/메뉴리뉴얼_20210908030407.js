const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];
const createPowerSet = (nums) => {
  const res = [];

  const dfs = (start = 0, arr = []) => {
    if (course.includes(nums.length)) {
      res.push(arr);
    }

    for (let i = 0; i < nums.length; i++) {
      dfs(i + 1, [...arr, nums[i]]);
    }
  };
};
