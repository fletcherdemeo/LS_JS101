// The time of day can be represented as the number of minutes before or after
// midnight. If the number of minutes is positive, the time is after midnight.
// If the number of minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns
// the time of day in 24 hour format (hh:mm). Your function should work with any
// integer input.

// You may not use javascript's Date class methods.

const MINUTES_IN_DAY = 1440;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;

// function removeDays(num) {
//   while (num >= MINUTES_IN_DAY || num <= -MINUTES_IN_DAY) {
//     if (num >= MINUTES_IN_DAY) {
//       num -= MINUTES_IN_DAY;
//     } else if (num <= -MINUTES_IN_DAY) {
//       num += MINUTES_IN_DAY;
//     }
//   }
//   return num < 0 ? num += MINUTES_IN_DAY : num;
// }

// function formatNum(num) {
//   return num.toLocaleString('en-US', { minimumIntegerDigits: 2 });
// }

// function timeOfDay(num) {
//   let remainingMins = removeDays(num);
//   let hours = Math.floor(remainingMins / MINUTES_IN_HOUR);
//   let mins = remainingMins - (hours * MINUTES_IN_HOUR);
  
//   return `${formatNum(hours)}:${formatNum(mins)}`;
// }

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;
  console.log(formatTime(hours, minutes));

  return formatTime(hours, minutes);
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");