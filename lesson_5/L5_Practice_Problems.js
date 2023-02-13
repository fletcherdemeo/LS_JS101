// // Practice Problem 1
// // How would you order the following array of number strings by descending
// // numeric value (largest number value to smallest)?

// let arr = ['10', '11', '9', '7', '8'];
// arr.sort((a, b) => Number(b) - Number(a));
// console.log(arr);

// // Practice Problem 2
// // How would you order the following array of objects based on the year of
// // publication of each book, from the earliest to the latest?
// let books = [
//   { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
//   { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
//   { title: 'Ulysses', author: 'James Joyce', published: '1922' },
//   { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
// ];
// books.sort((a, b) => {
//   return Number(a.published) - Number(b.published);
// })
// console.log(books);

// // Practice Problem 3
// // For each of these collection objects, demonstrate how you would access the
// // letter g.
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// console.log(arr1[2][1][3]);
// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// console.log(arr2[1].third[0]);
// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// console.log(arr3[2].third[0][0]);
// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// console.log(obj1.b[1]);
// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }};
// console.log(Object.keys(obj2.third)[0]);

// // Practice Problem 4
// // For each of these collection objects, demonstrate how you would change the value 3 to 4.
// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// console.log(arr1);
// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4
// console.log(arr2);
// let obj1 = { first: [1, 2, [3]] };
// obj1.first[2][0] = 4;
// console.log(obj1);
// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2.a.a[2] = 4;
// console.log(obj2);

// // Practice Problem 5
// // Consider the following nested object:
// let munsters = {
//   Herman: { age: 32, gender: 'male' },
//   Lily: { age: 30, gender: 'female' },
//   Grandpa: { age: 402, gender: 'male' },
//   Eddie: { age: 10, gender: 'male' },
//   Marilyn: { age: 23, gender: 'female'}
// };
// // Compute and display the total age of the male members of the family.
// let totalAge = Object.values(munsters).reduce((acc, char) => {
//     return char.gender === 'male' ? acc += char.age : acc += 0;
//   }, 0);
// console.log(totalAge);

// // Practice Problem 6
// // One of the most frequently used real-world string operations is that of
// // "string substitution," where we take a hard-coded string and modify it with
// // various parameters from our program.

// // Given this previously seen family object, print the name, age, and gender of
// // each family member:
// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };
// // Each output line should follow this pattern:
// // (Name) is a (age)-year-old (male or female).
// Object.entries(munsters).forEach(([name, obj]) => {
//   console.log(`${name} is a ${obj.age}-year-old ${obj.gender}`)
// });

// // Practice Problem 7
// // Given the following code, what will the final values of a and b be? Try to
// // answer without running the code.
// let a = 2; // 2
// let b = [5, 8]; // [5, 8]
// let arr = [a, b]; // [2, [5, 8]]

// arr[0] += 2; // [4, [5, 8]] --> a is 2
// arr[1][0] -= a; // [4, [3, 8]] --> a is 2, b is [3, 8]

// // Practice Problem 8
// // Using the forEach method, write some code to output all vowels from the
// // strings in the arrays. Don't use a for or while loop.
// let obj = {
//   first: ['the', 'quick'],
//   second: ['brown', 'fox'],
//   third: ['jumped'],
//   fourth: ['over', 'the', 'lazy', 'dog'],
// };
// const VOWELS = ['a', 'e', 'i', 'o', 'u'];
// Object.values(obj).forEach(arr => {
//   let vowels = [];
//   arr.forEach(word => {
//     vowels.push(word.match(/[aeiou]/gi));
//   });
//   console.log(vowels.flat());
// });

// // Practice Problem 9
// // Given the following data structure, return a new array with the same
// // structure, but with the values in each subarray ordered -- alphabetically
// // or numerically as appropriate -- in ascending order.

// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
// let newArr = arr.map(subArr => {
//   return subArr.sort((a, b) => {
//     if (typeof a === 'number') {
//       return a - b;
//     } else {
//       if (a < b) return - 1; 
//       else if (a > b) return 1;
//       else return 0;
//     }
//   });
// });
// console.log(newArr);

// // Practice Problem 10
// // Perform the same transformation of sorting the subarrays we did in the
// // previous exercise with one difference; sort the elements in descending order.
// let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];
// let newArr = arr.map(subArr => {
//   if (typeof subArr[0] === 'string') {
//     return subArr.slice().sort((a, b) => {
//       if (a > b) return -1;
//       else if (a < b) return 1;
//       else return 0;
//     });
//   } else {
//     return subArr.slice().sort((a, b) => b - a);
//   }
// });
// console.log(newArr);

// // Practice Problem 11
// // Given the following data structure, use the map method to return a new array
// // identical in structure to the original but, with each number incremented by
// // 1. Do not modify the original data structure.

// let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];
// let newArr = arr.map(obj => {
//   let newObj = {};
//   for ([key, value] of Object.entries(obj)) {
//     newObj[key] = value + 1;
//   }
//   return newObj;
// })
// console.log(newArr);

// // Practice Problem 12
// // Given the following data structure, use a combination of methods, including
// // filter, to return a new array identical in structure to the original, but
// // containing only the numbers that are multiples of 3.
// let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];
// let newArr = arr.map(subArr => {
//   let newSubArr = [];
//   subArr.forEach(val => {
//     if (val % 3 === 0) newSubArr.push(val);
//   })
//   return newSubArr;
// })
// console.log(newArr);

// // Practice Problem 13
// // Given the following data structure, sort the array so that the sub-arrays
// // are ordered based on the sum of the odd numbers that they contain.
// let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];
// // Since 1 + 3 < 1 + 7 < 1 + 5 + 3, the sorted array should look like this:
// // [ [ 1, 8, 3 ], [ 1, 6, 7 ], [ 1, 5, 3 ] ]
// function sumOddNumbers(arr) {
//   return arr
//     .filter(val => val % 2 !== 0)
//     .reduce((acc, val) => acc += val);
// }
// arr.sort((a, b) => {
//   return sumOddNumbers(a) - sumOddNumbers(b);
// });
// console.log(arr);

// // Practice Problem 14
// // Given the following data structure write some code to return an array
// // containing the colors of the fruits and the sizes of the vegetables. The
// // sizes should be uppercase, and the colors should be capitalized.
// let obj = {
//   grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
//   carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
//   apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
//   apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
//   marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
// };
// // The return value should look like this:
// // [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]
// let newArr = [];
// Object.values(obj)
//       .forEach(subObj => {
//         let colors = [];
//         subObj.colors.forEach(color => {
//           colors.push(color[0].toUpperCase() + color.slice(1))
//         });
//         newArr.push(colors);
//         newArr.push(subObj.size.toUpperCase());
//       })
// console.log(newArr);

// Practice Problem 15
// Given the following data structure, write some code to return an array which
// contains only the objects where all the numbers are even.
let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];
let newArr = arr.filter(obj => {
  return (Object.values(obj).every((arr) => {
    return arr.every((val) => val % 2 === 0)
  }));
});
console.log(newArr);