// If

const isUserLoggedIn = true
const temperature = 41

// if(temperature === 40){
//     console.log("Less than 50");
// } else {
//     console.log("Temperature is greater then 50")
// }

// console.log("Execute")

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`user Power: ${power}`)
// }

// console.log(`user Power: ${power}`)

// if(score > 100) {
//     var power = "fly"
//     console.log(`user Power: ${power}`)
// }

// console.log(`user Power: ${power}`)

// const balance = 1000
// if(balance > 500) console.log("test"), console.log("test2");

// if(balance < 500) {
//     console.log("Less than 500")
// } else if (balance < 750){
//     console.log("less then 750")
// } else if( balance < 900) {
//     console.log("less than 900")
// } else {
//     console.log("less then 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy course")
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}