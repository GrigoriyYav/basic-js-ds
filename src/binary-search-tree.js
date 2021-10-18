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

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}