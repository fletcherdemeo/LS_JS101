// Write a function that will take a short line of text,
// and write it to the console log within a box.

function getMsg(str, wrapWidth) {
  let msgArr = [];
  if (wrapWidth && str.length > wrapWidth) {
    let iter = str.length / wrapWidth;
    for (let i = 0; i < iter; i++) {
      let cutStr = str.slice(i * wrapWidth, (i + 1) * wrapWidth);
      if (cutStr.length !== wrapWidth) {
        cutStr += " ".repeat(wrapWidth - cutStr.length);
      }
      msgArr.push(`| ${cutStr} |`);
    }
  } else {
    msgArr.push(`| ${str} |`);
  }
  return msgArr;
}

function logInBox(str, maxStrWidth, wrapWidth) {
  // Get truncated string if maxWidth is/isn't set
  let newStr = maxStrWidth ? str.slice(0, maxStrWidth) : str;
  // Get newWrapWidth depending on whether maxStrWidth is greater or less than
  // wrapWidth
  let newWrapWidth = maxStrWidth < wrapWidth ? maxStrWidth : wrapWidth;

  // Determine length of string with border spacing (+ 2)
  let strLength = wrapWidth < newStr.length
    ? newWrapWidth + 2
    : newStr.length + 2;
  // Template box borders
  let horizontalRule = `+${"-".repeat(strLength)}+`;
  let emptyLine = `|${" ".repeat(strLength)}|`;

  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(getMsg(newStr, newWrapWidth).join('\n'));
  console.log(emptyLine);
  console.log(horizontalRule);
}

logInBox('To boldly go where no one has gone before.', undefined, 10);
// +------------+
// |            |
// | To boldly  |
// | go where n |
// | o one has  |
// | gone befor |
// | e.         |
// |            |
// +------------+