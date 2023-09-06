// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "deepak",
    "Full name": "Deepak kumar",
    [mySym]: "mykey1",
    age: 25,
    location: "BBSR",
    email: "test@text.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["Full name"])
// console.log(jsUser[mySym])

jsUser.email = "deepak@yahoo.com"
// Object.freeze(jsUser)
jsUser.email = "hitesh@micosoft.com"
// console.log(jsUser)

jsUser.greetings = function() {
    console.log("Hello User")
}

jsUser.greetingsTwo = function() {
    console.log(`Hello User, ${this.name} `)
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());