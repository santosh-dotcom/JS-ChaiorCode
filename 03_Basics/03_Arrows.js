const user = {
    username: "deepak",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sant"
// user.welcomeMessage()

// console.log(this)

// function chai (){
//     let username = "santosh"
//     console.log(this.username)
// }
// // chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username)
// }

const chai = () => {
    let username = "hitesh"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implecit return
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)


const addTwo = (num1, num2) =>  ({username: "santosh"})


console.log(addTwo(3, 8))

const myarray = [2, 5, 7, 8]

//myarray.forEach()