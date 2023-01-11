// function selectFruit(obj) {
//   let newObj = {};
//   for (let [fruit, type] of Object.entries(obj)) {
//     if (type === 'Fruit') {newObj[fruit] = type};
//   }
//   return newObj;
// }

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

// function doubleNumbers(numbers) {
//   let counter = 0;

//   while (counter < numbers.length) {
//     numbers[counter] = numbers[counter] * 2;
//     counter += 1;
//   }

//   return numbers;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]

// function doubleOddNumbers(numbers) {
//   let doubledNums = [];

//   for (let counter = 0; counter < numbers.length; counter += 1) {
//     let currentNumber = numbers[counter];

//     if (counter % 2 === 1) {
//       doubledNums.push(currentNumber * 2);
//     } else {
//       doubledNums.push(currentNumber);
//     }
//   }

//   return doubledNums;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleOddNumbers(myNumbers));  // => [2, 4, 6, 14, 2, 6]

// // not mutated
// console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]

function multiply(numbers, multiplier) {
  let multipliedNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];
    multipliedNums.push(currentNumber * multiplier);
  }

  return multipliedNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3)); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]
