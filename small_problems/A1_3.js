// Transpose MxN Matrix
// In the previous exercise, you wrote a function that transposed a 3x3 matrix
// represented by an array of arrays.

// Matrix transposes are not limited to 3x3 matrices, or even square matrices.
// Any matrix can be transposed simply by switching columns with rows.

// Modify your transpose function from the previous exercise so that it works
// with any MxN matrix with at least one row and one column.

// 1, 5, 8, 5
// 4, 7, 2, 0
// 3, 9, 6, 1

//                                       x  y    x  y    x  y
// 1, 4, 3 --> [0][0], [0][1], [0][2] = [0][0], [1][0], [2][0]
// 5, 7, 0 --> [1][0], [1][1], [1][2] = [0][1], [1][1], [2][1]
// 8, 2, 6 --> [2][0], [0][1], [0][2] = [0][2], [1][2], [2][2]
// 5, 0, 1 --> [0][0], [0][1], [0][2] = [0][3], [1][3], [2][3]

// []
// []
// []
// []

// 1. Create array for each column, length of row (x)
// 2. 
// 3. 

function transpose(arr) {
  let newArr = [];

  let rows = arr.length;
  let cols = arr[0].length;

  for (let y = 0; y < cols; y += 1) {
    let subArr = [];
    for (let x = 0; x < rows; x += 1) {
      subArr.push(arr[x][y]);
    }
    newArr.push(subArr);
  }

  return newArr;
}

// Examples:

const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]