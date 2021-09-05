"use strict";

class Node {
  constructor(value = "") {
    this.value = value;
    this.child = {};
    this.idxArray = [];
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(str, idx) {
    let currentNode = this.root;
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];
      if (currentNode.child[currentChar] === undefined) {
        currentNode.child[currentChar] = new Node(
          currentNode.value + currentChar
        );
      }
      currentNode.idxArray.push(idx);
      currentNode = currentNode.child[currentChar];
    }
  }

  search(str) {
    let currentNode = this.root;
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];

      if (currentNode.child["?"]) {
        currentNode.idxArray.map((idx) => (count[idx] += 1));
      }
      if (currentNode.child[currentChar]) {
        currentNode = currentNode.child[currentChar];
      }
    }
    currentNode.idxArray.map((idx) => (count[idx] += 1));
    console.log(currentNode.idxArray);
  }
}

class ReverseTrie {
  constructor() {
    this.root = new Node();
  }

  insert(str, idx) {
    let currentNode = this.root;
    for (let i = str.length - 1; i >= 0; i--) {
      const currentChar = str[i];
      if (currentNode.child[currentChar] === undefined) {
        currentNode.child[currentChar] = new Node(
          currentNode.value + currentChar
        );
      }
      currentNode.idxArray.push(idx);
      currentNode = currentNode.child[currentChar];
    }
  }

  search(str) {
    let currentNode = this.root;
    for (let i = str.length - 1; i >= 0; i--) {
      const currentChar = str[i];

      if (currentNode.child["?"]) {
        currentNode.idxArray.map((idx) => (count[idx] += 1));
      }
      if (currentNode.child[currentChar]) {
        currentNode = currentNode.child[currentChar];
      }
    }
    currentNode.idxArray.map((idx) => (count[idx] += 1));
    console.log(currentNode.idxArray);
  }
}

const query = ["fro??", "????o", "fr???", "fro???", "pro?"];
const words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
const count = new Array(query.length);
count.fill(0);
const arr = new Array(new Array(11), new Array(10001));
arr.forEach((array) => {
  console.log(array);
});
console.log(arr[0]);
console.log(TrieArray[0] === TrieArray[1]);
const ReverseTrieArray = arr[1].fill(new ReverseTrie());

query.map((elem, idx) => {
  debugger;
  if (elem[0] === "?") {
    const trieReverse = ReverseTrieArray[elem.length];
    trieReverse.insert(elem, idx);
  } else {
    const trie = TrieArray[elem.length];
    trie.insert(elem, idx);
  }
});

words.map((elem) => {
  const trieReverse = ReverseTrieArray[elem.length];
  const trie = TrieArray[elem.length];

  trie.search(elem);
  trieReverse.search(elem);
});

console.log(count);
//0번째가 정방향, 1번째가 역방향
