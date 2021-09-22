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

class Node {
  constructor(value = "") {
    this.value = value;
    this.child = {};
  }
}

class Tree {
  constructor() {
    this.root = new Node();
  }

  insert(str) {
    let currentNode = this.root;
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      if (currentNode.child[currentChar] === undefined) {
        currentNode.child[currentChar] = new Node(
          currentNode.value + currentChar
        );
      }
      currentNode = currentNode.child[currentChar];
    }
  }
}

const arr = query
  .map((elem) => {
    return elem.split(" ");
  })
  .map((e) => e.filter((f) => f !== "and"));
