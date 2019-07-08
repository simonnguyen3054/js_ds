const Node = require("./Node");

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //first create a node
  //if the head is null, set the head to be the new node
  //set the tail to be the head
  //if not, point the next property of the tail to the new node
  //point the prev property of the new node to the tail
  //set the tail to be the new node
  //increment the length
  //return the list

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  //if no head, return undefined
  //store the current tail in a variable to return later
  //if the length is 1; set the head and tail to be null
  //update the tail to be the previous node
  //Set the newTail's next to null
  //Set the node to be popped's prev to null
  //decrement length by one
  //return the value removed
  pop() {
    if(!this.head) return undefined;

    let poppedNode = this.tail;

    if(this.head === 1) {
      this.head = null;
      this.tail = this.head;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }

    this.length--;
    return poppedNode;
  }
}

let list = new doublyLinkedList();

list.push("Hello");
list.push("World");
list.push("!");

console.log(list.pop());
console.log("\n");
console.log(list);
