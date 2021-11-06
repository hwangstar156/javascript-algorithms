const isOverlap = (arr) => {
  const firstLen = arr.length;
  const checkSet = new Set();
  checkSet.add(arr);
  const secondLen = checkSet.size;
  return firstLen !== secondLen;
};

const subsets = (nums) => {
  const res = [];

  const dfs = (start = 0, arr = []) => {
    res.push(arr);
    for (let i = start; i < nums.length; i++) {
      dfs(i + 1, [...arr, nums[i]]);
    }
  };
  dfs();

  return res;
};

function solution(relation) {
  var answer = 0;
  return answer;
}
