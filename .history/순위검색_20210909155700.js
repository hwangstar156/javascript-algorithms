const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];

const result = new Array(info.length + 1).fill(0);
class Node {
  constructor(value = "", index) {
    this.value = value;
    this.child = {};
    this.count = 1;
    this.index = index;
  }
}

class Tree {
  constructor() {
    this.root = new Node();
  }

  insert(arr, idx) {
    let currentNode = this.root;
    for (let i = 0; i < arr.length; i++) {
      const currentStr = arr[i];
      if (currentNode.child[currentStr] === undefined) {
        currentNode.child[currentStr] = new Node(currentStr, idx);
      }
      currentNode = currentNode.child[currentStr];
    }
  }

  search(array, idx, visit = {}, currentNode = this.root) {
    visit[array[idx]] = true;
    if (idx === 5) {
      console.log(array[idx]);
      result[currentNode.index] += 1;
      return;
    }
    if (currentNode.child[array[idx]]) {
      this.search(array, idx + 1, visit, currentNode.child[arr[idx]]);
    }
    if (currentNode.child["-"]) {
      this.search(array, idx + 1, visit, currentNode.child["-"]);
    }
  }
}

const arr = query
  .map((elem) => {
    return elem.split(" ");
  })
  .map((e) => e.filter((f) => f !== "and"));

const ans = info.map((elem) => elem.split(" "));

const tree = new Tree();
arr.forEach((e, idx) => {
  tree.insert(e, idx);
});

ans.forEach((e) => {
  tree.search(e, 0);
});
