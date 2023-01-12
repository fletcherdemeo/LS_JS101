// function arrToObj(arr) {
//   let newObj = {};
//   arr.forEach((el, ind) => newObj[el] = ind);
//   return newObj;
// }

// let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
// // { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

// console.log(arrToObj(flintstones));

// function addAges(obj) {
//   let objValues = Object.values(obj);
//   let age = objValues.reduce((acc, curr) => {
//     return acc + curr;
//   }, 0)
//   return age;
// }

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// console.log(addAges(ages));

// function minAge(obj) {
//   return Object.values(obj).reduce((min, curr) => curr < min ? curr : min);
// }

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// console.log(minAge(ages));

// let statement = "The Flintstones Rock";
// let letterFrequency = {};

// statement
//   .replace(/\s/g, '')
//   .split('')
//   .forEach(letter => {
//     return letterFrequency[letter] ? 
//       letterFrequency[letter] += 1 : 
//       letterFrequency[letter] = 1
//     });

// console.log(letterFrequency);