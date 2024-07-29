//LIFO => Last In First Out
class Stack {
    constructor () {
       this.items = [];
    }

    push(element){
       return this.items.push(element);
    }

    pop(){
        if(this.items.length === 0){
          console.log("Stack is empty")
          return;
        }
        return this.items.pop();
    }
    
    peek(){
        if(this.items.length === 0){
            console.log('Stack is empty') 
          }
        console.log(this.items[this.items.length - 1])
        return this.items[this.items.length - 1];
    }

    size(){
        return this.items.length;
    }
    print() {
        console.log(this.items)
    }
}

let stack = new Stack;
stack.push(1);
stack.push(2);
stack.push(3)
// stack.peek();
stack.print();
stack.pop();
stack.print();