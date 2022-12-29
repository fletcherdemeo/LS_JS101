// Given a string that consists of some words and an assortment of
// non-alphabetic characters, write a function that returns that string with
// all of the non-alphabetic characters replaced by spaces. If one or more
// non-alphabetic characters occur in a row, you should only have one space
// in the result (i.e., the result string should never have consecutive spaces).

const ALPHABET = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  ' '
]

function cleanUp(str) {
  let strArr = str.split('');
  let newArr = strArr.map((char) => {
    if (ALPHABET.includes(char.toLowerCase())) {
      return char;
    } else {
      return ' ';
    };
  })

  let cleanedUpStr = newArr.join('');
  while (cleanedUpStr.includes('  ')) {
    cleanedUpStr = cleanedUpStr.replace('  ', ' ');
  }
  
  return cleanedUpStr;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "