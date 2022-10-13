var name = 'shree dharma'
console.log("line number 2", name)
sayname()
function sayname(){
    var name = 'Mr. S'
    console.log('line number 6', name)
    sayNameTwo()
    function sayNameTwo(){
        // var name = 'Mr. Shree'
        console.log('line number 9', name)
    }
}



