// Contains
// Add a method contains(value) to your SLL class, which is given a value as a parameter.  Return a boolean (true/false); true, if the list possesses a node that contains the provided value.

 class SLL {
    constructor(){
    	this.head=null;
    }
    contains(value) {
    	var currentNode = this.head;
    	while(currentNode){
    		if(currentNode === value){
    			return true;
    		}
    		else {
    			currentNode = currentNode.next;
    		}
    	}
    	return false;
    }
 }