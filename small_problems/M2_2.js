// A triangle is classified as follows:

// Equilateral: All three sides are of equal length.
// Isosceles: Two sides are of equal length, while the third is different.
// Scalene: All three sides are of different lengths.
// To be a valid triangle, the sum of the lengths of the two shortest sides must
// be greater than the length of the longest side, and every side must have a
// length greater than 0. If either of these conditions is not satisfied, the
// triangle is invalid.

// Write a function that takes the lengths of the three sides of a triangle as
// arguments and returns one of the following four strings representing the
// triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

// Problem
// Explicit rules:
// - IF side1 === side2 === side3 => equilateral
// - IF side1 === side2 OR side1 === side3 OR side2 === side3 => isoceles
// - IF side1 !== side2 !== side3 => scalene
// - IF side3 >= (side1 + side2) => invalid
// - IF (side1 <= 0) OR (side2 <= 0) OR (side3 <= 0) => invalid  

// Algorithm
// 1. Sort array in ascending order
// 2. Test for invalid conditions as above and return if either are true
// 3. Test for triangle type and return 

// Code

function testInvalid(tri) {
  return (tri[2] >= (tri[0] + tri[1])) || tri.some(side => side <= 0);
}

function testEquilateral(tri) {
  return tri[0] === tri[1] && tri[1] === tri[2];
}

function testIsoceles(tri) {
  return tri[0] === tri[1] || tri[0] === tri[2] || tri[1] === tri[2];
}

function triangle(side1, side2, side3) {
  let tri = [side1, side2, side3].sort((a, b) => a - b);

  if (testInvalid(tri)) return 'invalid';
  else if (testEquilateral(tri)) return 'equilateral';
  else if (testIsoceles(tri)) return 'isoceles';
  else return 'scalene';
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"