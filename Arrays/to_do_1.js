//Push Front 
//Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
var myArr=[3,5,"hi"];
for(i=myArr.length; i>0; i--){
	myArr[i] = myArr[i-1];
}
myArr[0] = "hello";
console.log(myArr);


//Pop Front
//Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
var val = myArr[myArr.length-1];
myArr.pop();
for(i=myArr.length; i>0; i--){
	myArr[i] = myArr[i-1];
}
myArr[0] = val;
console.log(myArr);


// Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
var index = 2;
var newVal = 55;
for(i=myArr.length; i>index; i--){
	myArr[i] = myArr[i-1];
}
myArr[index] = newVal;
console.log(myArr);


// Remove At
// Given an array and an index into array, remove and return the array value at that index. Do this without using built-in array methods except pop(). Think of popFront(arr) as equivalent to removeAt(arr,0).
var newIndex = 1;
var temp = myArr[newIndex];
for(i=newIndex; i<myArr.length; i++){
	myArr[i] = myArr[i+1];
}
myArr.pop();
console.log(temp);
console.log(myArr);


// Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element. For [1,2,3,4], return [2,1,4,3]. For example, change input ["Brendan",true,42] to [true,"Brendan",42]. As with all array challenges, do this without using any built-in array methods.
var newArr = [1,2,3,4,5];
for(i=0; i<newArr.length-1; i=i+2){
	var temp = newArr[i];
	newArr[i] = newArr[i+1];
	newArr[i+1] = temp;
}
console.log(newArr);


// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received applications from various sources. Her assistant alphabetized them but noticed some duplicates. Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. As with all these array challenges, do this without using any built-in array methods.
var duplicateArr = ["Amy", "Emily", "Emily", "Tim", "Tyler", "Tyler"];
var newerArr = [];
for(i=0; i<duplicateArr.length; i++){
	if(duplicateArr[i]!==duplicateArr[i+1]){
		newerArr.push(duplicateArr[i]);
	}
}
console.log(newerArr);

// Second: Solve this without using any nested loops.
//already did. 






















