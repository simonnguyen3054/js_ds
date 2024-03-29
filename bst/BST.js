const Node = require("./Node");

//new bst always have a root property
class BST {
  constructor() {
    this.root = null;
  }

  // insert(val) {
  //     //create a new node
  //     let newNode = new Node(val);

  //     //start a the root, check if there is a root
  //     if(!this.root) {
  //        this.root = newNode; //return the root to be the new node if there is no root
  //        return this; //return the bst
  //     }

  //     let current = this.root;
  //     if(newNode.val > current.val) {
  //         //if the val of the new node is greater than the root val
  //         while(current.right !== null) { //as long as current.right is not nul
  //             current = current.right; //keep going to the right and reassign to the current node
  //         }

  //         current.right = newNode; //once we reached the last current node, we point the current.right to the new node
  //     } else {
  //         while(current.left !== null) { //do the same for left node
  //             current = current.left;
  //         }

  //         current.left = newNode;
  //     }

  // }

  insert(val) {
    //create a new node
    let newNode = new Node(val);

    //check if root is null
    if (this.root === null) {
      this.root = newNode; //if it is, we make the root the new node
      return this;
    } else {
      //if not we assign the root to current
      var current = this.root;

      while (true) {
        //while true
        if (val < current.val) {
          //if the new node is less than the current node, check the left side
          if (current.left === null) {
            //if reach to the end of the tree
            current.left = newNode; //make current.left equal to newNode
            return this; //return the tree. The loop will end when current hit null
          } else {
            current = current.left; //
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(val) {
    let current = this.root;
    //first check if there's a root, if not we're done searching
    if (!current) {
      return null;
    }

    while (true) {
      if (val < current.val) {
        //if searching val is less than current val
        //go to the left
        if (current.left === null) {
          //if current.left is null we're done searching
          return false;
        } else {
          //we move to the left and assign the new current
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          return false;
        } else {
          current = current.right;
        }
      }

      if (current.val === val) {
        return current;
      }
    }
  }

  //print all nodes using breadth first search technique
  //Traverse from the root and print nodes from left to right on each depth
  //Use queue technique to store the nodes to be added to the result array
  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];

    //push the root node to the queue
    queue.push(node);
    while (queue.length) {
      //while there is node waiting in the queue (FIFO) to be pushed to the data arr
      node = queue.shift(); //remove first node from the queue array
      data.push(node.val); //push the removed node to the data arr

      if (node.left) queue.push(node.left);

      if (node.right) queue.push(node.right);
    }

    return data;
  }

  //Depth First Search PreOrder
  //start from the root and push root to the result array
  //Go all the way to the left and push all left nodes to the array
  //Go all the way to the right and push all the right nodes to the array
  //Pre => Root goes Before
  DFS_PreOrder() {
    const data = [];
    let current = this.root;

    function printNodes(current) {
      data.push(current.val);

      if (current.left) {
        printNodes(current.left);
      }

      if (current.right) {
        printNodes(current.right);
      }
    }

    printNodes(current);

    return data;
  }

  //Post => root goes after
  DFS_PostOrder() {
    const data = [];

    function traverse(current) {
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);

      data.push(current.val);
    }

    traverse(this.root);

    return data;
  }

  //InOrder
  DFS_InOrder() {
    const data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

let tree = new BST();

//          10
//     5           13
//  2     7     11    16

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(11);
tree.insert(16);

console.log(tree.BFS());
console.log(tree.DFS_PreOrder());
console.log(tree.DFS_PostOrder());
console.log(tree.DFS_InOrder());
