// Write a function that returns a list of all substrings of a string. Order the
// returned list by where in the string the substring begins. This means that
// all substrings that start at index position 0 should come first, then all
// substrings that start at index position 1, and so on. Since multiple
// substrings will occur at each position, return the substrings at a given
// index from shortest to longest.

// You may (and should) use the leadingSubstrings function you wrote in the
// previous exercise:

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

function substrings(str) {
  // let result = [];

  // for (let iter = 0; iter < str.length; iter += 1) {
  //   let substringsArr = leadingSubstrings(str.slice(iter, str.length));
  //   result.push(...substringsArr);
  // }

  // return result;

  return str
    .split('')
    .flatMap((_, ind) => leadingSubstrings(str.slice(ind)));
}

console.log(substrings('abcde'));
// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]