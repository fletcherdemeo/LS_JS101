// Write a function that combines two arrays passed as arguments, and returns a
// new array that contains all elements from both array arguments, with each
// element taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same
// number of elements.

function interleave(arr1, arr2) {
  // let newArr = [];
  // for (let iter = 0; iter < arr1.length; iter++) {
  //   newArr.push(arr1[iter], arr2[iter]);
  // }
  // return newArr;

  let newArr = arr1.map((_, index) => {
    return [arr1[index], arr2[index]];
  })
  return newArr.flat();
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]