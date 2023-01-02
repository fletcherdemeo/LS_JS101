// The parseInt() method converts a string of numeric characters 
// (including an optional plus or minus sign) to an integer. 
// The method takes 2 arguments where the first argument is the 
// string we want to convert and the second argument should always 
// be 10 for our purposes. parseInt() and the Number() method behave similarly. 
// In this exercise, you will create a function that does the same thing.

// Write a function that takes a string of digits and returns the appropriate 
// number as an integer. You may not use any of the methods mentioned above.

// For now, do not worry about leading + or - signs, nor should you worry about 
// invalid characters; assume all characters will be numeric.

// You may not use any of the standard conversion methods available in JavaScript, 
// such as String() and Number(). Your function should do this the old-fashioned 
// way and calculate the result by analyzing the characters in the string.

function stringToArray(str) {
  let arr = str.split('');
  let intArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case '1': intArr.push(1); break;
      case '2': intArr.push(2); break;
      case '3': intArr.push(3); break;
      case '4': intArr.push(4); break;
      case '5': intArr.push(5); break;
      case '6': intArr.push(6); break;
      case '7': intArr.push(7); break;
      case '8': intArr.push(8); break;
      case '9': intArr.push(9); break;
      case '0': intArr.push(0); break;
    }
  }
  return intArr;
}

function stringToInteger(str) {
  let arr = stringToArray(str);
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i] * (10 ** (arr.length - (i + 1)));
  }
  return total;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true