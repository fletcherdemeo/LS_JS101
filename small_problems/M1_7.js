// In the previous exercise, we developed a recursive solution for computing the
// nth Fibonacci number. In a language that is not optimized for recursion, some
// (but not all) recursive functions can be extremely slow and may require massive
// quantities of memory and/or stack space. If you tested for bigger nth numbers,
// you might have noticed that getting the 50th fibonacci number already takes
// a significant amount of time.

// Fortunately, every recursive function can be rewritten as a non-recursive (or 
// procedural) function.

// Rewrite your recursive fibonacci function so that it computes its results
// without using recursion.

// Examples and test cases
// 1. fib (5) = fib (4) + fib (3) => fib (n) = fib (n - 1) + fib (n - 2) + 
//                                             fib (n - 3) + 1
// 2. fib (4) = fib (3) + fib (2)
// 3. fib (3) = fib (2) + fib (1)
// 4. fib (2) = fib (1) + fib (0)
// 5. fib (1) = 1

// Algorithm
// 1. Create fibonacci array
//    - first two elements are known i.e. [1, 1]
// 2. Set iterator to 2
//    - while iter is less than num 
//      - add fibonacci number (sum of last two array elements) to array
// 3. Return last element of array

// Code
function fibonacci(num) {
  let fibNums = [1, 1];
  for (let iter = 3; iter <= num; iter += 1) {
    fibNums.push(fibNums[fibNums.length - 1] + fibNums[fibNums.length - 2]);
  }
  return fibNums[fibNums.length -1];
}

// Examples:

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050