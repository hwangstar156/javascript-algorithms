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
        if(currentNode.child[currentChar]){
            
        }
  };
}

const query = ["fro??", "????o", "fr???", "fro???", "pro?"];
const words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
const count = [];
const arr = new Array(new Array(10001), new Array(10001));
const myTrie = arr.map((array) => array.fill(new Trie()));

query.map((elem,idx) => {
    if(elem[0] === '?') {
        const trieReverse =arr[1][elem.length];
        trieReverse.insert(elem,idx);
    }else{
        const trie = arr[0][elem.length];
        trie.insert(elem, idx);
    }
});


//0번째가 정방향, 1번째가 역방향

