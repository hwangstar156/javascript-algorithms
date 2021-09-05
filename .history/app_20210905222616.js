"use strict";

class Node {
  constructor(value = "") {
    this.value = value;
    this.child = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert = (str) => {
    let currentNode = this.root;
    Array.from(str).map((char) => {
      if (currentNode.child[char] === undefined) {
        currentNode.child[char] = new Node(`${currentNode.value}${char}`);
      }
      currentNode = currentNode.child[char];
    });
  };

  search = (str) => {
    let currentNode = this.root;
    Array.from(str).map((char) => {
      if (currentNode.child[char]) {
        currentNode = currentNode.child[char];
      } else {
        return "";
      }
    });
    return currentNode.value;
  };
}
const arr = new Array(10001);
const myTrie = arr.fill(new Trie());
console.log(myTrie[1]);
