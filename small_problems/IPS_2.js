// Diamonds
// Write a function that displays a four-pointed diamond in an nxn grid, where
// n is an odd integer supplied as an argument to the function. You may assume
// that the argument will always be an odd integer.

// Problem
// 1. Create a four pointed diamond in an n*n grid
// 2. n is an odd integer supplied as an argument to the function
// 3. n will be the max *'s horizontally and vertically

// Algorithm
// 1. Get initial space count (maximum number of spaces - count / 2)
// 2. Loop through diamonds number, incrementing by 2
//    - Log spaces * spaceCount and stars * diamond index (step 2)
//    - Decrement spaceCount by 1 unless it is equal to 0 then increment by 1
// 3. Loop through diamonds number (minus 2), decrementing by 2
//    - Log space * spaceCount and stars * diamond index (step 3)
//    - Increment spaceCount by 1

function diamond(count) {
  let space = ' ';
  let star = '*';
  let spaceCount = Math.floor(count / 2);

  for (let ind = 1; ind <= count; ind += 2) {
    console.log(`${space.repeat(spaceCount)}${star.repeat(ind)}`);
    spaceCount > 0 ? spaceCount -= 1: spaceCount += 1;
  }

  for (let ind = (count - 2); ind > 0; ind -= 2) {
    console.log(`${space.repeat(spaceCount)}${star.repeat(ind)}`);
    spaceCount += 1;
  }
}

// Examples:

diamond(1);
// // logs
// // *  

diamond(3);
// // logs
// //  *   --> 1 = 3 / 2 round down
// // ***  --> 0
// //  *   --> 1

diamond(9);
// logs
//     *      --> 3 --> 4 = 9 / 2 round down
//    ***     --> 2 --> 3
//   *****    --> 1 --> 2
//  *******   --> 0 --> 1
// *********  --> - --> 0
//  *******   --> 0 --> 1
//   *****    --> 1 --> 2
//    ***     --> 2 --> 3
//     *      --> 3 --> 4