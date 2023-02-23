// Merge Sorted Lists
// Write a function that takes two sorted arrays as arguments and returns a new
// array that contains all the elements from both input arrays in sorted order.

// You may not provide any solution that requires you to sort the result array.
// You must build the result array one element at a time in the proper order.

// Your solution should not mutate the input arrays.

// 1. Create new empty arr
// 2. Loop through values of arr1 
//    - for each value
//      - loop through values of arr2
//      - if val1 < val2 then push to array and continue
//      - if val2 < val1 then push to array (process next element)

// sortedArr = []
// arr1 = [1, 5, 9]
// arr2 = [2, 6, 8]
// 1 < 2 --> push 1 --> [1]  --> arr1[0] < arr2[0] --> break outer
// 5 > 2 --> push 2 --> [1, 2]  --> arr1[1] > arr2[0] --> break inner
// 5 < 6 --> push 5 --> [1, 2, 5]  --> arr1[1] < arr2[1] --> break outer
// 9 > 6 --> push 6 --> [1, 2, 5, 6]  --> arr1[2] > arr2[1] --> break inner
// 9 > 8 --> push 8 --> [1, 2, 5, 6, 8]  --> arr1[2] > arr2[2] --> break inner
// No more elements to compare with so add 9 to end of array --> [1, 2, 5, 6, 8, 9]

function merge(arr1, arr2) {
  let sortedArr = [];
  let joinedArr = [...arr1, ...arr2];
  let numberOfVals = joinedArr.length;

  for (let iter = 0; iter < numberOfVals; iter++) {
    let minVal = Math.min(...joinedArr);
    joinedArr.splice(joinedArr.indexOf(minVal), 1);
    sortedArr.push(minVal);
  }

  return sortedArr;
}

// Examples:

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]