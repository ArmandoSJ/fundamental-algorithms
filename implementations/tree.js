//      10
//   4     20
// 2  8  17  170

class Node {
    constructor(value) {
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor() {
      this.root = null;
    }

    insert(value) {
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while (true) {
          if (value < currentNode.value) {
            if (!currentNode.left) {
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            if (!currentNode.right) {
              currentNode.right = newNode;
              return this;
            }
            currentNode = currentNode.right;
          }
        }
      }
    }

    search(value, tree = this.root) {
        if(!this.root)  return console.error("The Binary Search Tree is empty");
        if(!tree) return console.error("The node is not in the tree");
    
        if (value < tree.value) {
          returnthis.search(value, tree.left);
        } else if (value > tree.value) {
          return this.search(value, tree.rigth);
        } else {
          console.log("The value has been finded in the Tree");
          return tree;
        }
    }
  }
  
  const tree = new BinarySearchTree();