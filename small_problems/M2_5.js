// A featured number (something unique to this exercise) is an odd number that
// is a multiple of 7, with all of its digits occurring exactly once each. For
// example, 49 is a featured number, but 98 is not (it is not odd), 97 is not
// (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next
// featured number greater than the integer. Issue an error message if there is
// no next featured number.

// NOTE: The largest possible featured number is 9876543201.

// Algorithm
// 1. Check if number is less than largest possible number
//    - If not less then return error message
// 2. Get next number by taking input number and adding 1
// 3. Starting from next number til largest possible featured number
//    - Check if number is odd and multiple of 7 and contains unique characters

// Code
const MAX_NUMBER = 9876543201;

function oddAndMultiple(num) {
  return num % 2 !== 0 && num % 7 === 0; 
}

function uniqueChars(num) {
  let characterCounts = num
    .toString()
    .split('')
    .reduce((acc, curr) => {
      currentCount = acc[curr] || 0;
      return {...acc, [curr]: currentCount + 1};
    }, {});

  return Object.values(characterCounts).every(count => count === 1);
}

function featured(num) {
  if (num >= MAX_NUMBER) {
    return "There is no possible number that fulfills those requirements."
  };

  for (let nextNum = num + 1; nextNum <= MAX_NUMBER; nextNum += 1) {
    if (oddAndMultiple(nextNum) && uniqueChars(nextNum)) {
      return nextNum;
    }
  }
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."