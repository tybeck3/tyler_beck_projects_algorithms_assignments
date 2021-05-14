// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
function noBlanks(str){
	arr = str.split(" ");
	noBlanks = arr.join("");
	return noBlanks;
}

console.log(noBlanks("Pl ayTha tF u nkyM usi c "));


// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
function getDigits(str){
	arr = str.split("");
	newArr = [];
	for(i=0; i<arr.length; i++){
		if(Number.isInteger(+arr[i])){
			newArr.push(arr[i]);
		}
	}
	newStr = newArr.join("");
	return newStr;
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function getAcronym(str){
	arr = str.split(" ");
	acrArr = [];
	for(i = 0; i < arr.length; i++){
		wordSplit = arr[i].split("");
		acrArr.push(wordSplit[0]);
	}
	acronym = acrArr.join("");
	return acronym.toUpperCase();
}

console.log(getAcronym("Live from New York, it's Saturday Night!"));

// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

function countNonSpaces(str){
	strArr = str.split(" ");
	noSpaces = strArr.join("");
	return noSpaces.length;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.

function shortStrings(stringArr, length){
	longStr = [];
	for(i = 0; i < stringArr.length; i++){
		if(stringArr[i].length >= length){
			longStr.push(stringArr[i]);
		}
	}
	return longStr;
}

console.log(shortStrings(["hello", "hi", "how are ya"], 6));


