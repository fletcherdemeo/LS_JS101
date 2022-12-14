// In the previous exercise, you developed a function that converts 
// non-negative numbers to strings. In this exercise, you're going 
// to extend that function by adding the ability to represent 
// negative numbers as well.

// Write a function that takes an integer and converts it to a string 
// representation.

// You may not use any of the standard conversion functions available 
// in JavaScript, such as String() and Number.prototype.toString(). 
// You may, however, use integerToString() from the previous exercise.

// You might also want to check the Math.sign() function.

function integerToString(num) {
  if (num === 0) {
    return '0';
  }

  let arr = [];
  let mod = 10;
  let total = num;
  while (total > 0) {
    let remainder = ((total % mod) / (mod / 10));
    arr.unshift(remainder);
    total -= (total % mod);
    mod *= 10;
  }
  return arr.join('');
}

function signedIntegerToString(num) {
  let sign = Math.sign(num);
  switch(sign) {
    case 1: 
      return "+" + integerToString(Math.abs(num));
    case -1: 
      return "-" + integerToString(Math.abs(num));
    default:
      return integerToString(num);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");