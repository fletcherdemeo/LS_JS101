// Problem

// input: integer (number of cubes)
// output: integer (number of blocks left over after tallest structure is built)
// rules: 
//       - explicit requirements:
//         - building blocks are cubes
//         - structure is built in layers
//         - top layer is single block
//         - block in upper layer must be supported by block in lower layer
//         - block in lower layer can support more than one block in upper layer
//         - no gaps between blocks

//       - implicit requirements:
//         - input cubes integer is a valid integer >= 0
//         - output cubes integer is a valid integer >= 0
//         - layer number correlates with blocks in a layer
//           - number of blocks in layer = layer number * layer number

// questions:
//       - what is the maximum number of blocks per row?
//       - what does supporting 'more than one block' mean?


// Examples and test cases

// console.log(calculateLeftoverBlocks(0) === 0); //true i.e. 0 layers, 0 leftover
// console.log(calculateLeftoverBlocks(1) === 0); //true i.e. 1 layers, 0 leftover
// console.log(calculateLeftoverBlocks(2) === 1); //true i.e. 1 layers, 1 leftover
// console.log(calculateLeftoverBlocks(4) === 3); //true i.e. 1 layers, 3 leftover
// console.log(calculateLeftoverBlocks(5) === 0); //true i.e. 2 layers, 0 leftover
// console.log(calculateLeftoverBlocks(6) === 1); //true i.e. 2 layers, 1 leftover
// console.log(calculateLeftoverBlocks(14) === 0); //true i.e. 3 layers, 0 leftover

//       ---          --> 1 * 1 = 1, total blocks = (1) = 1
//     --- ---        --> 2 * 2 = 4, total blocks = (4 + 1) = 5
//   --- --- ---      --> 3 * 3 = 9, total blocks = (9 + 4 + 1) = 14
// --- --- --- ---    --> 4 * 4 = 16, total blocks = (16 + 9 + 4 + 1) = 30

// Data Structures

// processing: perhaps use nested array to represent the structure?
//             each subarray could represent a layer

// Algorithm

// calculateLeftoverBlocks
// 1. Start with:
//   - A count of the 'number of blocks remaining' equal to the input
//   - A count of the 'current layer' equal to 0
//   - A count of the 'blocks required to build layer' equal to 0
// 2. Calculate the number for the 'next layer' by adding 1 to the value for the
//    'current layer'
// 3. Using the number for the 'next layer', calculate the 'number of blocks
//    required' to build that layer, by multiplying the number by itself
// 4. Determine if the 'number of blocks remaining' is greater than or equal to
//    the 'number of blocks required' to build the layer
//    - If it is:
//      - Subtract the 'number of blocks required' from the 'number of blocks remaining'
//      - Increment the 'current layer' by 1
//      - Go back to Step 3
//    - If it isn't:
//      - Return the 'number of blocks remaining'

// Code

function calculateLeftoverBlocks(blocks) {
  let blocksRemaining = blocks;
  let blocksRequired = 0;
  let currentLayer = 0;

  while (blocksRemaining >= blocksRequired) {
    currentLayer += 1;
    blocksRequired = currentLayer * currentLayer;
    if (blocksRemaining >= blocksRequired) {
      blocksRemaining -= blocksRequired;
    }
  }

  return blocksRemaining;
}


console.log(calculateLeftoverBlocks(0) === 0); //true i.e. 0 layers, 0 leftover
console.log(calculateLeftoverBlocks(1) === 0); //true i.e. 1 layers, 0 leftover
console.log(calculateLeftoverBlocks(2) === 1); //true i.e. 1 layers, 1 leftover
console.log(calculateLeftoverBlocks(4) === 3); //true i.e. 1 layers, 3 leftover
console.log(calculateLeftoverBlocks(5) === 0); //true i.e. 2 layers, 0 leftover
console.log(calculateLeftoverBlocks(6) === 1); //true i.e. 2 layers, 1 leftover
console.log(calculateLeftoverBlocks(14) === 0); //true i.e. 3 layers, 0 leftover