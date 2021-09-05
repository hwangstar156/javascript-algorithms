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
      if (currentChar === "?") {
        currentNode.idxArray.push(idx);
        return;
      }

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
      } else {
        return;
      }
    }
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
      if (currentChar === "?") {
        currentNode.idxArray.push(idx);
        return;
      }
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
      } else {
        return;
      }
    }
  }
}

const query = ["fro??", "????o", "fr???", "fro???", "pro?"];
const words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
const count = new Array(query.length);
count.fill(0);
const arr = new Array(2);
arr[0] = new Trie();
arr[1] = new ReverseTrie();
query.map((elem, idx) => {
  if (elem[0] === "?") {
    arr[1].insert(elem, idx);
  } else {
    arr[0].insert(elem, idx);
  }
});

words.map((elem) => {
  const trieReverse = arr[1];
  const trie = arr[0];
  trieReverse.search(elem);
  trie.search(elem);
});
//0번째가 정방향, 1번째가 역방향
