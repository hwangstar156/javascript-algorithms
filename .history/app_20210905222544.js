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
const arr = new Array(15);
const myTrie = arr.fill(new Trie(), 0, 15);
console.log(myTrie[1]);
// myTrie[0].insert("hell");
// myTrie[0].insert("hello");
// myTrie[0].insert("hep");

// console.log(myTrie[0].search("hell")); // 찾아야함
// console.log(myTrie[0].search("hello"));
// console.log(myTrie[0].search("hep")); // 찾아야함
// console.log(myTrie[0].search("help"));
// console.log(myTrie[0].search("world"));
