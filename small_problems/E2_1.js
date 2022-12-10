function greetings(nameArr, jobObj) {
  return `Hello, ${nameArr.join(' ')}! Nice to have a ${jobObj.title} ${jobObj.occupation} around.`;
}


console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);