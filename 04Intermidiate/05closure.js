// function init(){
//     firstName = "Shree dharma"
//     console.log("I am closure")
//     function getFirstname(){
//         console.log(firstName)
//     }
//     return getFirstname
// }

// var value = init()
// value()

function doAddition(x){
    return (y)=>(x + y)
}

var add4 = doAddition(4)
console.log(add4(4))

console.log(doAddition(4)(16)) //also known as Curring
