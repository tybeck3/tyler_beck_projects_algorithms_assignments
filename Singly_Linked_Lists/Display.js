// Display
// Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!

 class SLL {
    constructor(){
    	this.head=null;
    }
    display() {
    	var runner = this.head;
    	var resultString = "";
    	while(runner){
    		var stringToAdd = toString(runner.value);
    		resultString = resultString.concat(stringToAdd);
    		runner = runner.next;
    	}
    	return resultString;
    }
 }