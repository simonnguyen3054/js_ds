//create a node to link with doubly linked list

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

module.exports = Node;
