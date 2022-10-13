// var returnedvariable = Math.max(2,3,4,5,6)
// console.log(returnedvariable);

// myObj = {}
// Object.assign(myObj, {a:1,b:2,c:3}, {d:4,e:5,f:6})
// console.log(myObj);

function sumTwo(a,b){
    return a+b
}

console.log(sumTwo(3,7));
var arr = [2,3,4]
console.log(sumTwo(...arr)); //Spread Operator

// Rest Operator
function sumAll(a, b, ...args){
    let sum = 0
    for (const arg of args) {
        sum += arg
    }
    console.log(a*b);
    console.log(sum);
}

sumAll(2,3,4,5,6)
