// Question 1
// Write three different ways to remove all of the elements from the following
// array:

// let numbers = [1, 2, 3, 4];
// numbers = [];
// console.log(numbers);
// numbers.length = 0;
// console.log(numbers);
// numbers = Array.of();
// console.log(numbers);

// Question 2
// What will the following code output?
// console.log([1, 2, 3] + [4, 5]);

// Converts arrays to strings and then concatenates the strings together
// '1, 2, 34, 5'

// Question 3
// What will the following code output?

// let str1 = "hello there";
// let str2 = str1;
// str2 = "goodbye!";
// console.log(str1);

// Code will output 'hello there' as str1 is a primiitive value and will
// therefore be passed by value to str2 when declared. Therefore the
// reassignment of str2 will not impact on str1's value

// Question 4
// What will the following code output?

// let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
// let arr2 = arr1.slice();
// arr2[0].first = 42;
// console.log(arr1);

// Code will output [{ first: 42 }, { second: "value2" }, 3, 4, 5]
// the slice() method creates a shallow copy of the input, this means that if arr1
// includes objects then arr2 will point to these same objects in memory. Because
// objects are mutable the reassignmnet of arr2[0].first to 42 will also be
// reflected in arr1's value. Conversely if one of the primitive values in arr2 was
// changed (i.e. arr2[2,3 or 4]) then these would not be reflected in arr1. 

// Question 5
// The following function unnecessarily uses two return statements to return
// boolean values. Can you rewrite this function so it only has one return
// statement and does not explicitly use either true or false?

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isColorValid1(color) {
//   return color === "blue" || color === "green";
// }

// function isColorValid2(color) {
//   return ['blue', 'green'].includes(color);
// }

// console.log(isColorValid1('green'));
// console.log(isColorValid1('blue'));
// console.log(isColorValid1('pink'));
// console.log(isColorValid2('green'));
// console.log(isColorValid2('blue'));
// console.log(isColorValid2('pink'));
