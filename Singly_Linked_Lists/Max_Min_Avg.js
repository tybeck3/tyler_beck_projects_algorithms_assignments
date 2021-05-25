// Max/Min/Average
// SList: Max
// Create method max() to return list’s largest val.

 class SLL {
   constructor(){
        this.head = null;
   }
    max() {
    	var runner = this.head;
        var max = runner.value;
        while(runner){
            if(runner.value > max){
                max = runner.value;
            }
            runner = runner.next;
        }
        return max;
    }

// SList: Min
// Create min(node) to return list’s smallest val.
    min() {
    	var runner = this.head;
        var min = runner.value;
        while(runner){
            if(runner.value < min){
                min = runner.value;
            }
            runner = runner.next;
        }
        return min;
    }
 
// SList: Average
// Create average() to return average val.
    average() {
    	var runner = this.head;
        var sum = 0;
        var count = 0;
        while(runner){
            sum = sum + runner.value;
            count++;
            runner = runner.next;
        }
        return sum / count;
    }
 }