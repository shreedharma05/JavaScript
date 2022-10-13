// Loops in Js

// for(var i = 0;i <= 10; i++){
//     console.log(i)
// }

var mycities = ['Trichy', 'Bangalore',2002, 'Chennai', 'Kochi', 1947]

for (let i = 0; i < mycities.length; i++){
    if (typeof mycities[i] !== 'string') continue
    // if (typeof mycities[i] !== 'string') break
    console.log(mycities[i])
}

// let i = 20

// while (i < mycities.length ){
//     console.log(mycities[i])
//     i++
// }

// do {
//     console.log(mycities[i])
//     i++
// } while(i<10)
