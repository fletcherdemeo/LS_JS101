// Write a function that takes a string argument and returns a 
// new string that contains the value of the original string 
// with all consecutive duplicate characters collapsed into a 
// single character.

function crunch(str) {
  let finalStr = '';

  for (let i = 1; i <= str.length; i++) {
    if (str[i] !== str[i - 1]) {
      finalStr += str[i - 1];
    }
  }

  console.log(finalStr);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""