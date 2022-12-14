// In the previous exercise, you developed a function that converts 
// simple numeric strings to integers. In this exercise, you're going 
// to extend that function to work with signed numbers.

// Write a function that takes a string of digits and returns the 
// appropriate number as an integer. The string may have a leading 
// + or - sign; if the first character is a +, your function should 
// return a positive number; if it is a -, your function should return 
// a negative number. If there is no sign, return a positive number.

// You may assume the string will always contain a valid number.

// You may not use any of the standard conversion methods available in 
// JavaScript, such as parseInt() and Number(). You may, however, use 
// the stringToInteger() function from the previous lesson.

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

function stringToSignedInteger(str) {
  switch(str[0]) {
    case '-': return -stringToInteger(str.slice(1));
    case '+': return stringToInteger(str.slice(1));
    default: return stringToInteger(str)
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true