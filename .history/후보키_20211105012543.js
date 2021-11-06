const checkArr = [];

const isValid = (str) => {
  let flag = true;
  checkArr.forEach((e) => {
    if (str.includes(e)) {
      flag = false;
    }
  });

  return flag;
};

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

const makeKey = (indexArray, arr) => {
  let str = "";
  indexArray.forEach((idx) => {
    str += arr[idx];
  });
  return str;
};

const makeKeyArray = (subSet, relation) => {
  relation.map((e) => makeKey(subSet, e));
};

function solution(relation) {
  var answer = 0;

  return answer;
}

solution();
