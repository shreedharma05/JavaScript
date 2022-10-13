var User = {
    name : "",
    getUserName : function(){
        console.log(`User name is ${this.name}`)
    }
}

// console.log(shree)
// shree.name = "shree dharma"
var shree = Object.create(User, {
    name : {value : "Shree dharma"}
})

shree.getUserName()
console.log(shree)

var shine = Object.create(User, {
    name : {value : "Shine"},
    courseCount : {value : 3}
})

shine.getUserName()
console.log(shine.courseCount)
console.log(shine)
