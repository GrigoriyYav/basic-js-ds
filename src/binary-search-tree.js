const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  
  constructor(){
    this.BinarySearchTree = null;
  }

  root() {
    return this.BinarySearchTree
  }

  add(data) {
    this.BinarySearchTree = addNode(this.BinarySearchTree, data);

    function addNode(node, data) {
      if(!node) {
        return new Node(data)
      };

      if(node.data === data) {
        return node
      };

      if(data < node.data) {
        node.left = addNode(node.left, data)
      }
      else {
        node.right = addNode(node.right, data)
      };

      return node
    }
  }

  has(data) {
    return searchIn(this.BinarySearchTree, data)

    function searchIn(node, data) {
      if(!node) {
        return false
      };

      if(node.data === data) {
        return true
      };

      return data < node.data ?
      searchIn(node.left, data) :
      searchIn(node.right, data)
     }
  }

  find(data) {
    return findIn(this.BinarySearchTree, data)

    function findIn(node, data) {
      if(node.data === data) {
        return node
      };

      if(!node) {
        return null
      };

      return data < node.data ?
      findIn(node.left, data) :
      findIn(node.right, data)
     }
}

  remove(data) {
    this.BinarySearchTree = removeNode(this.BinarySearchTree, data);
  
    function removeNode(node, data){
      if(!node){
        return null;
      } 
  
      if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      }else if(node.data < data){
        node.right = removeNode(node.right, data);
        return node;
      }else{
        if(!node.left && !node.right){
          return null
        } 
  
        if(!node.left){
          node = node.right;
          return node;
        } 
  
        if(!node.right){
          node = node.left;
          return node;
        }
        
        let minFromRight = node.right;
        while(minFromRight.left){
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
  }
}

  min() {
    if(!this.BinarySearchTree){
      return null;
    }
    let node = this.BinarySearchTree;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.BinarySearchTree){
      return null;
    }
    let node = this.BinarySearchTree;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }

}