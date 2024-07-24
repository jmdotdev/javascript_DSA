class Node {
    constructor (value) {
      this.value = value; // value of node
      this.next = null; // pointer to next node
    }
}

class LinkedList {
    constructor (){
      this.head = null;
      this.size = 0;
    }
   
   addNode(value){
     let newNode = new Node(value); // create new node
     //if linked list is empty, new node will be head of linked list
     if(this.head === null){
        this.head = newNode
     }
     //if linked list is not  empty
    else{
        let currentNode = this.head; // start from head of linked list
        while(currentNode.next != null){ // loop through the linked list to the last node
            currentNode = currentNode.next; 
        }
        currentNode.next = newNode; // newNode appended after the last node in the linked list
    }
    this.size++; // increment of linked list size
   }
   
   printList(){
     
   }
  // returns the size of linked list
   getSize(){
    return this.size; 
   }
}

let linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
console.log("size", linkedList.getSize());