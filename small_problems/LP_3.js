// Write a function that takes two array arguments, each containing a list of
// numbers, and returns a new array containing the products of all combinations
// of number pairs that exist between the two arrays. The returned array should
// be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

function multiplyAllPairs(arr1, arr2) {
  let newArr = [];

  arr1.forEach(el1 => {
    arr2.forEach(el2 => {
      newArr.push(el1 * el2);
    })
  });

  return newArr.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
// [8, 6, 2, 4, 16, 12, 4, 8] interim
// [2, 4, 4, 6, 8, 8, 12, 16] sorted
