// Our recursive fibonacci function from an earlier exercise isn't very
// efficient. It starts slowing down with an nth argument value as low as 35.
// One way to improve the performance of our recursive fibonacci function
// (and other recursive functions) is to use memoization.

// Memoization is an approach that involves saving a computed answer for future
// reuse, instead of computing it from scratch every time it is needed. In the
// case of our recursive fibonacci function, using memoization saves calls to
// fibonacci(nth - 2) because the necessary values have already been computed by
// the recursive calls to fibonacci(nth - 1).

// For this exercise, your objective is to refactor the recursive fibonacci
// function to use memoization.

// Examples and test cases
// 1. fib (5) = fib (4) + fib (3) => fib (n) = fib (n - 1) + fib (n - 2)
// 2. fib (4) = fib (3) + fib (2)
// 3. fib (3) = fib (2) + fib (1)
// 4. fib (2) = fib (1) + fib (0)
// 5. fib (1) = 1

// Algorithm
// 1. Create global lookup table for memoization 
// 2. If fib number is 0 then return 0
// 3. If fib number is 1 then return 1
// 4. If fib number is > 1 then add last two fib nums together to get current 
//    fib number
//    - Check whether fib num is in lookup table
//    - If fib num IS in lookup table then return fib number 
//    - If fib num IS NOT in lookup table then find fibonacci number and add to table

// Code

const FIB_NUMBERS = [0, 1, 1]

function fibonacci(num) {
  if (!FIB_NUMBERS[num]) {
    FIB_NUMBERS[num] = fibonacci(num - 1) + fibonacci(num - 2);
  }
  return FIB_NUMBERS[num];
}

// Examples:

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(35));      // 6765