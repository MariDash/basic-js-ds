const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

// class Node {
//   constructor(value) {
//     this.value = this.value;
//     this.left = null;
//     this.right = null;
//   }
// }
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    function addNode(node, data) {
      if (node == null) {
        return new Node(data);
      }
      if (node.data == data) {
        return node;
      }
      if (node.data > data) {
        node.left = addNode(node.left, data);
      } else if (node.data < data) {
        node.right = addNode(node.right, data);
      }
      return node;
    }
    this.treeRoot = addNode(this.treeRoot, data);
  }

  has(data) {
    return !!this.find(data);
  }

  find(data) {
    return findNode(this.treeRoot, data);

    function findNode(node, data) {
      if (node === null) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        return findNode(node.left, data);
      } else if (node.data < data) {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.treeRoot = deleteNode(this.treeRoot, data);

    function deleteNode(node, data) {
      if (node === null) {
        return;
      }
      if (node.data === data) {
        if (!node.left && !node.right) {
          return null;
          // node = null;
          // return node;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.right) {
          node = node.left;
          return node;
        } else {
          let maxNodeFromLeft = node.left;
          while (maxNodeFromLeft.right) {
            maxNodeFromLeft = maxNodeFromLeft.right;
          }
          node.data = maxNodeFromLeft.data;
          maxNodeFromLeft = null;
          return node;
        }
      } else if (node.data > data) {
        node.left = deleteNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = deleteNode(node.right, data);
        return node;
      }
    }
  }

  min() {
    let currentNode = this.treeRoot;
    if (!currentNode) {
      return;
    }

    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    let currentNode = this.treeRoot;
    if (!currentNode) {
      return;
    }

    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
