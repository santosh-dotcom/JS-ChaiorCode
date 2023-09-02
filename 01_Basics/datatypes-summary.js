// Primitive

// 7 Types : String, Number, Boolean, Null, Undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('234')

console.log(id === anotherId);

const bigNumber = 34565545655n


// Reference (Non primitive)
// Array, Objects, Functions

const fruits = ["apple", "orange", "Grapes"];

let myobj = {
    name: "Deepak",
    age: 32
}

const myFunction = function() {
    console.log("hello Hey")
}

console.log(typeof anotherId);

// Typeof : https://262.ecma-international.org/5.1/#sec-11.4.3


// ***********************************************************


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "deepakdeocom"

let anothername = myYoutubename
anothername = "chaiorcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "deepsk@yahoo.com",
    upi: "user@ybxl"
}

let userTwo = userOne

userTwo.email = "deepak@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);