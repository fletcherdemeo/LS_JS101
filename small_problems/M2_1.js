// Write a function that takes a string and returns an object containing the
// following three properties:
// - the percentage of characters in the string that are lowercase letters
// - the percentage of characters that are uppercase letters
// - the percentage of characters that are neither

// You may assume that the string will always contain at least one character.

// Algorithm

// 1. Create object that will store information
// 2. Find lower case characters in string
// 3. Find percentage of lowercase characters in string compared with
//    string length and store in obj
// 4. Repeat steps 2 & 3 for uppercase characters
// 5. Find neither percentage by minusing lowercase and uppercase percentages
//    from 100

// Code

function letterPercentages(str) {
  let obj = {};
  let lower_chars = str.match(/[a-z]/g);
  let upper_chars = str.match(/[A-Z]/g);

  obj['lowercase'] = lower_chars ? lower_chars.length / str.length * 100 : 0;
  obj['uppercase'] = upper_chars ? upper_chars.length / str.length * 100 : 0;
  obj['neither'] = 100 - (obj['uppercase'] + obj['lowercase'])

  Object.entries(obj).forEach(([key, val]) => obj[key] = val.toFixed(2));

  return obj;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }