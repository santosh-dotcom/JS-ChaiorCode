const name = "Deepak"
const age = 34

// console.log(name + age + " value");

console.log(`My Name is ${name} and age is ${age}`)

const gameName = new String('Deepak-deo');

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);

const newStringOne = "      deepak   "
console.log(newStringOne);
console.log(newStringOne.trim());

//Know More on trim() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

const url = "https://deepak.com/depa%20asd"

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));