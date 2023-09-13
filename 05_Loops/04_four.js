const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
//    console.log(key)
// console.log(`${key} shortcut is for ${myObject}`);
}

const programming = ["js", "py", "cpp", "js"]

for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set("IN", "INdia")
map.set('USA', "United stats of america")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
   console.log(key);
}