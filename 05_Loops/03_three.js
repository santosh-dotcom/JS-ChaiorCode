// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`)
}

//Maps https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map()
map.set("IN", "INdia")
map.set('USA', "United stats of america")
map.set('FR', "France")
map.set('IN', "India")

// console.log(map)

for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObject = {
    game1: 'NFS',
    game2: 'spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ":-", value);
// } Not working