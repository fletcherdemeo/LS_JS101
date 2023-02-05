// Write a function that computes the difference between the square of the sum
// of the first count positive integers and the sum of the squares of the
// first count positive integers.

// Algorithm
// 1. create squared sum total
// 2. create sum of squares total
// 3. loop through input number
//    - square sum total -> add the numbers that are being looped through to
//      get the sum
//    - sum of squares -> calculate the square number and add to sum of squares
//      total
// 4. return the squared sum total (need to square result) minus the sum of
//    squares total

// Code
function sumSquareDifference(num) {
  let sum = 0;
  let sumSquare = 0;

  for (let iter = 1; iter <= num; iter += 1) {
    sum += iter;
    sumSquare += (iter ** 2);
  }

  return (sum ** 2) - sumSquare;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150