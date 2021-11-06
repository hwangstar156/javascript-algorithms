const checkArr = [];

const isValidKey = (str) => {
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
  const checkSet = new Set(arr);
  const secondLen = checkSet.size;
  console.log(checkSet, secondLen);
  return firstLen !== secondLen;
};

const makeSubsets = (nums) => {
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
  return relation.map((e) => makeKey(subSet, e));
};

function solution(relation) {
  var answer = 0;
  const subSets = makeSubsets([0, 1, 2, 3]);
  subSets.forEach((subset) => {
    if (isValidKey(subSets.join(""))) {
      const keyArray = makeKeyArray(subset, relation);
      if (!isOverlap(keyArray)) {
        checkArr.push(subset.join(""));
      }
    }
  });
  console.log(checkArr);
  return answer;
}

solution([
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
]);
