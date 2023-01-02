// Write a function that takes a non-empty string argument and returns the
// middle character(s) of the string. If the string has an odd length, you
// should return exactly one character. If the string has an even length,
// you should return exactly two characters.

function centerOf(str) {
  let middle = str.length / 2;
  if (Number.isInteger(middle)) {
    return str.slice(middle - 1, middle + 1);
  }
  return str[Math.floor(middle)];
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"