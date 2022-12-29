// Write a function that takes a year as input and returns the century. The
// return value should be a string that begins with the century number, and
// ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000
// comprise the 20th century.

function century(year) {
  let century = Math.ceil(year / 100).toString();

  if (century[century.length - 2] === '1') {
    return century + 'th';
  } else if (century.endsWith('1')) {
    return century + 'st';
  } else if (century.endsWith('2')) {
    return century + 'nd';
  } else if (century.endsWith('3')) {
    return century + 'rd';
  } else {
    return century + 'th';
  }
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"