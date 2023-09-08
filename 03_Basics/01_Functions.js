function sayMyName () {
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("T");
    console.log("O")
}

// sayMyName()

    // function addTwoNumbers(number1, number2){ //Parameters
    //     console.log(number1 + number2);
    // }

function addTwoNumbers(number1, number2){ //Parameters
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 6) // Arguments

// console.log("Result:", result)

function loginUserMessage(userName = "sam"){
    if(!userName === undefined){
        console.log("Please enter a username")
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("santosh"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(299, 399, 499))

const user = {
    userName: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 300, 100, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 100, 500]))