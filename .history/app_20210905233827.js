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

  insert = (str, idx) => {
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
    currentNode.idxArray.push(idx);
  };

  search = (str) => {
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
  };
}

class ReverseTrie {
  constructor() {
    this.root = new Node();
  }

  insert = (str, idx) => {
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
  };

  search = (str) => {
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
  };
}

const query = ["fro??", "????o", "fr???", "fro???", "pro?"];
const words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
const count = [];
const arr = new Array(new Array(10001), new Array(10001));
const Trie = arr[0].fill(new Trie());
const ReverseTrie = arr[1].fill(new ReverseTrie());
console.log(Trie);
query.map((elem, idx) => {
  if (elem[0] === "?") {
    const trieReverse = ReverseTrie[elem.length];
    trieReverse.insert(elem, idx);
  } else {
    const trie = Trie[elem.length];
    trie.insert(elem, idx);
  }
});

words.map((elem) => {
  const trieReverse = ReverseTrie[elem.length];
  const trie = Trie[elem.length];
  trie.search(elem);
  trieReverse.search(elem);
});

console.log(count);
//0번째가 정방향, 1번째가 역방향
