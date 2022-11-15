const readline = require('readline-sync');

function shortLongShort(strOne, strTwo) {
  shortStr = "";
  longStr = "";
  if (strOne.length < strTwo.length) {
    shortStr = strOne;
    longStr = strTwo;
  } else {
    shortStr = strTwo;
    longStr = strOne;
  }
  return shortStr + longStr + shortStr;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
