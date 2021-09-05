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
    let questionNode = this.root;
    for (let i = 0; i < str.length; i++) {
      const currentChar = str[i];

      if (questionNode.child["?"]) {
        questionNode = questionNode.child["?"];
      }
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
const arr = new Array(new Array(11), new Array(11));
const myTrie = arr.map((array) => array.fill(new Trie()));
console.log(arr);
