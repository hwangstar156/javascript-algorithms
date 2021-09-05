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

const myTrie = new Trie();

myTrie.insert("hel");
myTrie.insert("hello");
myTrie.insert("hep");

console.log(myTrie.search("hell")); // 찾아야함
console.log(myTrie.search("hello"));
console.log(myTrie.search("hep")); // 찾아야함
console.log(myTrie.search("help"));
console.log(myTrie.search("world"));
