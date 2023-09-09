// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB Connected`)
})();

// ( () => {
//     console.log(`DB connected two`)
// })()

( (name) => {
    console.log(`DB connected two ${name}`)
})('santosh')