// For of loop is for arrays
const webSites = ['Amazon','Youtube','Apple','Google']
for (const n of webSites){
    console.log(n)
}

// For in loop is for objects
const symboles = {
    Az : 'Amazon',
    Yt : 'Youtube',
    Ap : 'Apple',
    G : 'Google'
}

for (const n in symboles){
    console.log(`Key is : ${n} and the corresponding value is : ${symboles[n]}`)
}
