// // Question 1

// // Given a string, return a new string that replaces every occurrence of the
// // word "important" with "urgent":

// let advice = "Few things in life are as important as house training your pet dinosaur.";
// console.log(advice.replace(/important/g, 'urgent'));

// // Question 2

// // The Array.prototype.reverse method reverses the order of elements in an array
// // , and Array.prototype.sort can rearrange the elements in a variety of ways,
// // including descending. Both of these methods mutate the original array as shown
// // below. Write two distinct ways of reversing the array without mutating the 
// // original array. Use reverse for the first solution, and sort for the second.

// // let numbers = [1, 2, 3, 4, 5];
// // numbers.reverse();
// // console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// // numbers = [1, 2, 3, 4, 5];
// // numbers.sort((num1, num2) => num2 - num1);
// // console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// // Bonus Question: Can you do it using the Array.prototype.forEach() method?

// let numbers = [1, 2, 3, 4, 5];
// let numbersReverse = [...numbers];
// numbersReverse.reverse();
// console.log(numbersReverse);

// let numbersSort = [...numbers];
// numbersSort.sort((num1, num2) => num2 - num1);
// console.log(numbersSort);

// let numbersForEach = [];
// numbers.forEach((_, ind) => {
//   numbers[ind] < numbers[ind -1] ?
//     numbersForEach.push(numbers[ind]) :
//     numbersForEach.unshift(numbers[ind]);
// });
// console.log(numbersForEach);

// // Question 3

// // Given a number and an array, determine whether the number is included in
// // the array.

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// // Question 4

// // Starting with the string:
// let famousWords = "seven years ago..."; 
// // show two different ways to put the expected "Four score and " in front of it.

// console.log('Four score and ' + famousWords);
// console.log(`Four score and ${famousWords}`);

// // Question 5

// // Given an array of numbers [1, 2, 3, 4, 5], mutate the array by removing the
// // number at index 2, so that the array becomes [1, 2, 4, 5].

// let array = [1, 2, 3, 4, 5];
// array.splice(2, 1);
// console.log(array);

// // Question 6

// // Suppose we build an array like this:

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// // Create a new array that contains all of the above values, but in an un-nested format:
// // [ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]
// console.log(flintstones.flat());

// // Question 7

// // Consider the following object:
// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// // Create an array from this object that contains only two elements: Barney's
// // name and Barney's number:
// // [ 'Barney', 2 ]
// let barneyArray = Object.entries(flintstones)[2];
// console.log(barneyArray);

// // Question 8

// // How would you check whether the objects assigned to variables numbers and
// // table below are arrays?

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));

// // Question 9

// // Back in the stone age (before CSS), we used spaces to align things on the
// // screen. If we have a 40-character wide table of Flintstone family members,
// // how can we center the following title above the table with spaces?

// let title = "Flintstone Family Members";
// let tableWidth = 40;
// // let spaces = (tableWidth - title.length) / 2;
// let leftSpaces = Math.ceil((tableWidth - title.length) / 2);
// let rightSpaces = Math.floor((tableWidth - title.length) / 2);
// console.log(`${' '.repeat(leftSpaces)}${title}${' '.repeat(rightSpaces)}`);

// Question 10

// Write a one-line expression to count the number of lower-case t characters
// in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1
  .split('')
  .reduce((acc, curr) => curr === 't' ? acc + 1 : acc + 0, 0)
);