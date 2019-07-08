//create a node class
//it has two properties as it's instantiated
//a value and a next property that points to the next instance of node
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//create the linkedList class
//construct method has head, tail, and length
class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}

//create a new instance of linkedList
let list = new linkedList();
console.log(list.length);