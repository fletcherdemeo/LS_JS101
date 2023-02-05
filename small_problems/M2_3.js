// A triangle is classified as follows:

// Right: One angle is a right angle (exactly 90 degrees).
// Acute: All three angles are less than 90 degrees.
// Obtuse: One angle is greater than 90 degrees.
// To be a valid triangle, the sum of the angles must be exactly 180 degrees,
// and every angle must be greater than 0. If either of these conditions is not
// satisfied, the triangle is invalid.

// Write a function that takes the three angles of a triangle as arguments and
// returns one of the following four strings representing the triangle's
// classification: 'right', 'acute', 'obtuse', or 'invalid'.

// You may assume that all angles have integer values, so you do not have to
// worry about floating point errors. You may also assume that the arguments
// are in degrees.

function testInvalid(tri) {
  return (
    tri.reduce((acc, curr) => acc + curr) !== 180 || 
    tri.some(angle => angle <= 0)
  );
}

function testRight(tri) {
  return tri.some(angle => angle === 90);
}

function testAcute(tri) {
  return tri.every(angle => angle < 90);
}

function triangle(angle1, angle2, angle3) {
  let tri = [angle1, angle2, angle3];

  if (testInvalid(tri)) return 'invalid';
  else if (testRight(tri)) return 'right';
  else if (testAcute(tri)) return 'acute';
  else return 'obtuse';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"