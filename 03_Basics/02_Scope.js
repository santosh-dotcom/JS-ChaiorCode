// var c = 300
let a = 308
if(true){
    let a = 10
    const b = 20
    // console.log(a)
}

// console.log(a);
// console.log(b)
// console.log(c)

function one(){
    const userName = "santosh"

    function two(){
        const website = "youtube"
        // console.log(userName)
    }
    // console.log(website);

    two()
}
// one()

if (true) {
    const username = "hitesh"
    if(username === 'hitesh'){
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website) //error
}
// console.log(username)// error

//++++++++++++++++++++Intresting++++++++++++

addone(5)
function addone(num){
    return num + 1
}


addTwo(5)
const addTwo = function(num){
    return num + 2
}
