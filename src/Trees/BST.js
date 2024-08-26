//Binary Search Tree
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
     var newNode = new Node(value);
     if(this.root == null){
        this.root = newNode;
        return this;
     }
     let currentNode = this.root;
     while(true){
      if(currentNode.value === value) return undefined;
      //if value is less than root traverse on the right side of the tree
      if(value < currentNode.value ){
          if(currentNode.left == null){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        }
    
      if(value > currentNode.value){
        if(currentNode.right == null){
           currentNode.right = newNode;
           return this;
        }
        currentNode = currentNode.right;
      }
     }
    }
}