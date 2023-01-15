// Write a function that takes a string argument and returns a list of substrings
// of that string. Each substring should begin with the first letter of the word,
// and the list should be ordered from shortest to longest.

function leadingSubstrings(str) {
  return str
    .split('')
    .map((_, ind, arr) => {
      let subStr = '';
      for (let iter = 0; iter <= ind; iter += 1) {
        subStr += arr[iter];
      }
      return subStr;
    });
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]