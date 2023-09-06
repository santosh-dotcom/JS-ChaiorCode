// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sanik"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

const regualrUser = {
    email: "someone@gmail.com",
    fullName: {
        userFullName: {
            firstName: "santosh",
            lastName: "deo"
        }
    }
}

// console.log(regualrUser.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// Know More : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

const users = [
    {
        id: 1,
        email: "hello@gmail.com"
    },
    {
        id: 1,
        email: "hello@gmail.com"
    },
    {
        id: 1,
        email: "hello@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

