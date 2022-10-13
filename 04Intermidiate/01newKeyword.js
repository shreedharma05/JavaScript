var User = function(firstName, courseCount,dob){
    this.firstName = firstName                 //Functional approach of defining objects
    this.courseCount = courseCount             //Functional approach of defining objects
    this.dateOfBirth = dob
    this.getCourseCount = function(){
        console.log(`${this.firstName} has enrolled in ${this.courseCount} courses`)
    }
    
}

User.prototype.getFirstname = function(){
    console.log(`Your firstname is : ${this.firstName}`)
}


var shreedharma = new User("shreedharma",3,05012002)
shreedharma.getCourseCount()
// hasOwnProperty checks whether the property is available or not (returns True or False)
if (shreedharma.hasOwnProperty("firstName")){
    shreedharma.getFirstname()
}
// console.log(shreedharma)

var paul = new User("paul",2,01012002)
paul.getCourseCount()
paul.getFirstname()
// console.log(paul)

