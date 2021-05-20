// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
 class SLL {
     constructor(){
        this.head=null;
     }
     addFront(value) {
        newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

//Write a method to remove the head node and return the new list head node. 
//If the list is empty, return null.
    removeFront() {
    	if(this.head){
            this.head = this.head.next;
        }
        return this.head;
    }

// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    front() {
    	if(this.head){
            return this.head.value;
        }
        return null;
    }
 }