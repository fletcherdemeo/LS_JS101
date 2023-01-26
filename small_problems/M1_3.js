// Take the number 735291 and rotate it by one digit to the left, getting 352917.
// Next, keep the first digit fixed in place and rotate the remaining digits to
// get 329175. Keep the first two digits fixed in place and rotate again to get
// 321759. Keep the first three digits fixed in place and rotate again to get
// 321597. Finally, keep the first four digits fixed in place and rotate the
// final two digits to get 321579. The resulting number is called the maximum
// rotation of the original number.

// Write a function that takes an integer as an argument and returns the maximum
// rotation of that integer. You can (and probably should) use the rotateRightmostDigits
// function from the previous exercise.

// Problem
// 1. Rotate number to left
// 2. Fix first digit - rotate remaining digits
// 3. Repeat step 2 for remaining digits and rotate final two digits

// Examples / test cases
// 735291 -> 352917 -> 6
// 3 52917 -> 3 29175 -> 5
// 32 9175 -> 32 1759 -> 4
// 321 759 -> 321 597 -> 3
// 3215 97 -> 3215 79 -> 2

// Data structures
// Input: integer
// Output: integer
// Processing: 

// Algorithm
// 1. Get the number of digits in the integer (numDigits)
// 1. Loop over numDigits (in descending order -> 6, 5, 4, 3, 2, 1)
//    - call the rotateRightmostDigits function with num and the loop index as
//      the negative index
//    - reassign num (initial input) to the rotated array
//    - store the rotate arrays values at length - index
//      i.e. store [0] (6 - 6), [1] (6 - 5), [2] (6 - 4) etc.
//    - rotate the remainder of the array (i.e. not including the stored value)
//    - add to stored values 
// 2. Return stored values

// Code

function rotateRightmostDigits(num, negInd) {
  let numStr = `${num}`;
  let removeEl = numStr.slice(-negInd)[0];
  let beforeEl = numStr.slice(0, numStr.length - negInd);
  let afterEl = numStr.slice(numStr.length - negInd + 1);
  return Number(`${beforeEl}${afterEl}${removeEl}`);
}

function maxRotation(num) {
  let numDigits = `${num}`.length; 
  for (let i = numDigits; i >= 2; i -= 1) {
    num = rotateRightmostDigits(num, i);
  }
  return num;
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845