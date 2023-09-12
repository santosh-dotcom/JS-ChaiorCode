// for loop

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5) {
//         console.log("5 is best number");
//     }
//     console.log(element)
// }

for(let i = 0; i <= 10; i++) {
   // console.log(`Outer loop value: ${i}`);
    for( let j = 10; j <=10; j++) {
        //console.log('Inner loop value ${j} and inner loop ${i}')
       // console.log(i + '*' + j + '=' +i*j);
    }
}

// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//Break and Continue

// for (let index = 0; index <= 20; index++) {
//     if(index == 5) {
//         console.log("detected 5")
//         break
//     }
//     const element = index;
//     console.log(element)
// }


for (let index = 0; index <= 20; index++) {
    if(index == 5) {
        console.log("detected 5")
        continue
    }
    const element = index;
    console.log(element)
}