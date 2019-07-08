//What is linked list?
//consists of elements without indices
//a data struture that contains head, tail, length property
//consists of nodes
//each node has a value and a pointer to another node or value

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if(!this.head) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        let current = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unshift(value) {
        let newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== index) {
            current = current.next;
            counter++;
        }

        return current
    }

    set(value, index) {
        const node = this.get(index);
        if (node) {
            node.value = value;
            return false;
        } 

        return true;
    }

    insert(value, index) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return !!this.push(value); //use double bang to return a boolean value
        if (index === 0) return !!this.unshift(value);
        const newNode = new Node(value);
        const previousNode = this.get(index - 1);
        const temp = previousNode.next;

        previousNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
           
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined;
        if(index === this.length - 1) return !!this.pop();
        if(index === 0) return !!this.shift();
        const toBeRemovedNode = this.get(index);
        const newNode = this.get(index + 1);
        const prev = this.get(index - 1);
        prev.next = newNode;
        this.length--;
        return toBeRemovedNode;
    }
}

let list = new SinglyLinkedList;

list.push("Hello");
list.push("World");
list.push("!");
list.remove(2);


console.log(list);



