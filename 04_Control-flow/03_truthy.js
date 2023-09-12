const userEmail = "test@test.com"

if(userEmail) {
    console.log("Got user email")
} else {
    console.log("Don't have user email ")
}

//Falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     // console.log("Array is empty")
// }

// const emptyObj = {}

// if(object.keys(emptyObj).length === 0) {
//     // console.log("Object is empty");
// }

// Nullish Coalescing Operator (??) : Null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80")