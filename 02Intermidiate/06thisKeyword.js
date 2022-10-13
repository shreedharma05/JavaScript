// part 1 for this keyword

console.log(this)

var object = {
    firstName : 'Shree dharma',
    lastName : 'Kr',
    courseCount : 4,
    getCourseCount : function(){
        console.log(this)
        function sayThis(){
            console.log(this)
        }
        sayThis()
    },
} 
object.getCourseCount()

// This in regular function call refers to global object