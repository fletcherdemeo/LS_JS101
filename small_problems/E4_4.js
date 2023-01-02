// Write a function that returns true if its integer argument is palindromic,
// or false otherwise. A palindromic number reads the same forwards and 
// backwards.

function isPalindrome(str) {
  reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
}

function isPalindromicNumber(num) {
  let numStr = num.toString();
  let reverseNumStr = num.toString().split('').reverse().join('');

  return numStr === reverseNumStr;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true