// Write a function that rotates the last count digits of a number. To perform
// the rotation, move the first of the digits that you want to rotate to the
// end and shift the remaining digits to the left.

// 1. Convert number to string so that number can be searched
// 2. Use the negInd (negative index) parameter to identify the number that 
//    needs to be moved
// 3. Slice the string to get the two parts of the string that are before and
//    after
// 4. Combine the before and after elements with the remove element at the end
// 5. Convert the string to a number
// 6. Return the new number 

function rotateRightmostDigits(num, negInd) {
  let numStr = `${num}`;
  let removeEl = numStr.slice(-negInd)[0];
  let beforeEl = numStr.slice(0, numStr.length - negInd);
  let afterEl = numStr.slice(numStr.length - negInd + 1);
  return Number(`${beforeEl}${afterEl}${removeEl}`);
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219 -> 0, 4 + 5 (6 - 2 + 1), 5
console.log(rotateRightmostDigits(735291, 3));      // 735912 -> 0, 3 + 4 (6 - 3 + 1), 5
console.log(rotateRightmostDigits(735291, 4));      // 732915 -> 0, 2 + 3 (6 - 4 + 1), 5
console.log(rotateRightmostDigits(735291, 5));      // 752913 -> 0, 1 + 2 (6 - 5 + 1), 5
console.log(rotateRightmostDigits(735291, 6));      // 352917 -> 0, 0 + 1 (6 - 6 + 1), 5