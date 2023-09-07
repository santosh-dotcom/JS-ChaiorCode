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

console.log(loginUserMessage("santosh"))