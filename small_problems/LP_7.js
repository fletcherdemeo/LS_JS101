// Write a function that takes an array of numbers and returns the sum of the
// sums of each leading subsequence in that array. Examine the examples to
// see what we mean. You may assume that the array always contains at least
// one number.

// 2. Sum each of the sub-arrays and return total 
//    i.e. [3, 5, 2] -> [[3], [3, 5], [3, 5, 2]] -> [3, 8, 10]
// 3. Sum each of the array elements and return total

function getSubArrays(arr) {
  return arr.map((_, ind, arr) => arr.slice(0, ind + 1))
}

function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}

function sumOfSums(numbers) {
  let subArrays = getSubArrays(numbers);
  let subArraySums = subArrays.map(arr => sumArray(arr));
  return sumArray(subArraySums);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35