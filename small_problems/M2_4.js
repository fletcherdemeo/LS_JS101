// Some people believe that Fridays that fall on the 13th day of the month are
// unlucky days. Write a function that takes a year as an argument and returns
// the number of Friday the 13ths in that year. You may assume that the year
// is greater than 1752, which is when the United Kingdom adopted the modern
// Gregorian Calendar. You may also assume that the same calendar will remain
// in use for the foreseeable future.

// Algorithm
// 1. Create list of months that will be scanned through
// 2. Create yearly total of Friday 13ths - set to 0 
// 3. For each month in list
//    - create date string in format 'Month Date, Year'
//    - if 13th day of that month falls on a Friday then add to total
// 4. Return yearly total of Friday 13ths

// Code
const NUMBER_OF_MONTHS = 12;
const DATE_TO_CHECK = 13;
const DAY_INDEX = 5;

function fridayThe13ths(year) {
  let total = 0;

  for (let month = 0; month < NUMBER_OF_MONTHS; month += 1) {
    let date = new Date(year, month, DATE_TO_CHECK);
    if (date.getDay() === DAY_INDEX) {
      total += 1;
    }
  }

  return total;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2