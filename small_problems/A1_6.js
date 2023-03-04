// Merge Sort
// Merge sort is a recursive sorting algorithm that works by breaking down an
// array's elements into nested subarrays, then combining those nested subarrays
// back together in sorted order. It is best explained with an example.

// Given the array [9, 5, 7, 1], let's walk through the process of sorting it
// with merge sort. We'll start off by breaking the array down into nested
// subarrays:

// [9, 5, 7, 1] -->
// [[9, 5], [7, 1]] -->
// [[[9], [5]], [[7], [1]]]

// We then work our way back to a flat array by merging each pair of nested
// subarrays back together in the proper order:

// [[[9], [5]], [[7], [1]]] -->
// [[5, 9], [1, 7]] -->
// [1, 5, 7, 9]

// Write a function that takes an array argument and returns a new array that
// contains the values from the input array in sorted order. The function
// should sort the array using the merge sort algorithm as described above.
// You may assume that every element of the array will be of the same data
// type—either all numbers or all strings.

// Feel free to use the merge function you wrote in the previous exercise.

// [6, 2, 7, 1, 4] --> 1
// [[6, 2], [7, 1, 4]] --> 2 --> Split array
// [[[6], [2]], [[7], [1, 4]]] --> 3 --> Split array[0] & array[1]
// [[[6], [2]], [[7], [[1], [4]]]] --> 4 --> Split arra

// 1. Get midpoint of input array
// 2. Split array in 2 (arr1, arr2) based on midpoint
// 3. If arr1 has more than 1 element
//    - Loop over from point 1 with arr1
// 4. If arr2 has more than 1 element
//    - Loop over from point 1 with arr2
// 5. Run merge for each time split is called 

function merge(array1, array2) {
  let copy1 = array1.slice();
  let copy2 = array2.slice();
  let result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

function mergeSort(arr) {
  let midPt = Math.floor(arr.length / 2);
  let arr1 = arr.slice(0, midPt);
  let arr2 = arr.slice(midPt);

  if (arr1.length > 1) arr1 = mergeSort(arr1);
  if (arr2.length > 1) arr2 = mergeSort(arr2);
  
  return merge(arr1, arr2);
}

// Examples:

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]

console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]