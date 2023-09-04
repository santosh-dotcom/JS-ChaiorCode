// Array : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myarr = [1, 2, 3, 4, 5, 6, 7, 8]
const myHeros = ["shaktiman", "nagraj", "ram", "lambo"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myarr[1]);

// Arry Methods

// myarr.push(6)
// myarr.push(9)
// myarr.pop()

// myarr.unshift(6)
// myarr.shift()

// console.log(myarr.includes(10));
// console.log(myarr.indexOf(4));

// console.log(myarr);

// const newArr = myarr.join()
// console.log(typeof newArr)
// console.log( myarr)

// slice, splice

console.log("A", myarr)

const myn1 = myarr.slice(1, 3)

console.log(myn1);
console.log("B", myarr)

const myn2 = myarr.splice(1, 3)
console.log("c", myarr)
console.log(myn2)