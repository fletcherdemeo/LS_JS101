// Write a function that takes a floating point number representing an angle
// between 0 and 360 degrees and returns a string representing that angle in
// degrees, minutes, and seconds. You should use a degree symbol (˚) to
// represent degrees, a single quote (') to represent minutes, and a double quote
//  (") to represent seconds. There are 60 minutes in a degree, and 60 seconds
// in a minute.

function getCorrectAngle(angle) {
  let newAngle = angle;
  while (newAngle < 0) {
    newAngle += 360;
  } 
  while (newAngle > 360) {
    newAngle -= 360;
  }
  return newAngle;
}

function dms(angle) {
  let newAngle = getCorrectAngle(angle)
  let degrees = Math.floor(newAngle);
  let minutes = Math.floor(newAngle % 1 * 60)
                    .toLocaleString('en-US', {minimumIntegerDigits: 2});
  let seconds = Math.floor((newAngle % 1 * 60) % 1 * 60)
                    .toLocaleString('en-US', {minimumIntegerDigits: 2});

  return `${degrees}°${minutes}'${seconds}"`
}

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
console.log(dms(-1));           // 359°00'00"
console.log(dms(400));          // 40°00'00"
console.log(dms(-40));          // 320°00'00"
console.log(dms(-420));         // 300°00'00"