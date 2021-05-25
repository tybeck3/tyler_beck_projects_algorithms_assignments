// Length
// Create a new SLL method length() that returns number of nodes in that list.

 class SLL {
   constructor(){
   	this.head=null;
   }
    length() {
    	var runner = this.head;
    	var num = 0;
    	while(runner){
    		num++;
    		runner = runner.next;
    	}
    	return num;
    }
 }