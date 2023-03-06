// Seeing Stars
// Write a function that displays an 8-pointed star in an NxN grid, where N is
// an odd integer that is supplied as an argument to the function. The smallest
// such star you need to handle is a 7x7 grid (i.e., when N is 7).

// Algorithm
// 1. Determine first, mid and last star locations on initial run
//    - first = index 0 (always top left corner)
//    - mid = input number / 2 (round down to get index)
//    - last = input number - 1 (always top right corner, last index)
// 2. Set up incrementor value to initially be 1
// 3. The number of rows and cols that will be needed for processing are equal
//    to input number
// 4. Loop through each row:
//    a. Create array comprising first, mid and last star indexes
//    b. Create empty string that will be added to as looping through columns
//    c. Loop through each col:
//       - Add star or space depending on whether or not col index is in stars
//         array (created at 4a)
//       - If first star index === mid star index then this will be middle row
//         and entire row of stars should be logged
//         The incrementor should also be reversed to -1 to process the bottom
//         half of the star
// 5. Log the str that was created via the column loops
// 6. Increment the first star location by incrementor value
//    - this will be 1 for first half and -1 for second half
// 7. Decrement the last star location by incrementor value 
//    - this will be -1 for first half and 1 for second half

function star(size) {
  let firstStar = 0;
  let midStar = Math.floor(size / 2);
  let lastStar = size - 1;
  let incrementor = 1;

  for (let row = 0; row < size; row++) {
    let stars = [firstStar, midStar, lastStar];
    let str = "";
    for (let col = 0; col < size; col++) {
      if (firstStar === midStar) {  // indicates middle row/col
        str = str + "*";
        incrementor = -1;
      } else {
        str = stars.includes(col) ? str + "*" : str + " ";
      }
    }
    console.log(str);

    firstStar += incrementor;
    lastStar -= incrementor;
  }
}

// Examples:
star(7);
// logs          Stars                  Spaces,
// *  *  *  --> [0, 3, 6],             [1, 2, 4, 5]
//  * * *   --> [1, 3, 5],             [0, 2, 4, 6]
//   ***    --> [2, 3, 4],             [0, 1, 5, 6]
// *******  --> [0, 1, 2, 3, 4, 5, 6], []
//   ***    --> [2, 3, 4],             [0, 1, 5, 6]
//  * * *   --> [1, 3, 5],             [0, 2, 4, 6]
// *  *  *  --> [0, 3, 6],             [1, 2, 4, 5]

// star(9);
// logs            Stars                       Spaces
// *   *   *  --> [0, 4, 8]                   [1, 2, 3, 5, 6, 7]
//  *  *  *   --> [1, 4, 7]                   [0, 2, 3, 5, 6, 8]
//   * * *    --> [2, 4, 6]                   [0, 1, 3, 5, 7, 8]
//    ***     --> [3, 4, 5]                   [0, 1, 2, 6, 7, 8]
// *********  --> [0, 1, 2, 3, 4, 5, 6, 7, 8],[]
//    ***     --> [3, 4, 5]                   [0, 1, 2, 6, 7, 8]
//   * * *    --> [2, 4, 6]                   [0, 1, 3, 5, 7, 8]
//  *  *  *   --> [1, 4, 7]                   [0, 2, 3, 5, 6, 8]
// *   *   *  --> [0, 4, 8]                   [1, 2, 3, 5, 6, 7]