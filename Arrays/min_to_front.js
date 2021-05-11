// Min to Front
// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

function minToFront(arr){
	var min = arr[0];
	for(i=1; i<arr.length; i++){
		if(arr[i]<min){
			min = arr[i];
			var temp = i;
		}
		else{
			return arr;
		}
	}
	console.log(min);
	console.log(temp);

	for(i=temp; i<arr.length; i++){
		arr[i]=arr[i+1];
	}
	arr.pop();
	console.log(arr);
	for(i=arr.length; i>0; i--){
		arr[i] = arr[i-1];
	}
	arr[0]=min;

return arr;
}

console.log(minToFront([1,4,2,3,5]));
