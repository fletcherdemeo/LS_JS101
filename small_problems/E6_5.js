// Write a function that takes a string argument consisting of a first name, a
// space, and a last name, and returns a new string consisting of the last
// name, a comma, a space, and the first name.

function swapName(name) {
  let nameArr = name.split(' ');

  let otherNames = nameArr.slice(0, nameArr.length - 1).join(' ');
  let lastName = nameArr[nameArr.length - 1];
  return `${lastName}, ${otherNames}`;
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"