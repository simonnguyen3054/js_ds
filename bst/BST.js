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
        if(this.root === null) {
            this.root = newNode; //if it is, we make the root the new node
            return this;
        } else {
            //if not we assign the root to current
            var current = this.root;

            while(true) { //while true
                if(val < current.val) { //if the new node is less than the current node, check the left side
                    if(current.left === null) { //if reach to the end of the tree
                        current.left = newNode; //make current.left equal to newNode
                        return this; //return the tree. The loop will end when current hit null
                    } else {
                        current = current.left; //
                    }
                } else if(val > current.val) {
                    if(current.right === null) {
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
        if(!current) {
            return null;
        } 

        while(true) {
            if(val < current.val) { //if searching val is less than current val
                //go to the left
                if(current.left === null) { //if current.left is null we're done searching
                    return false;
                } else { //we move to the left and assign the new current
                    current = current.left;
                }

            } else if (val > current.val) {
                if(current.right === null) {
                    return false;
                } else {
                    current = current.right;
                }
            }

            if(current.val === val) {
                return current;
            }
        }
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


console.log(tree.find(17));