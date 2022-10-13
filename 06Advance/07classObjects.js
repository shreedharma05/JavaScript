// import User from "./06classjs"

const User = require("./06classjs")

const shree = new User("Shreedharma","shree050102@gmail.com")
console.log(shree.getInfo());

User.prototype.getEmail = function(){console.log(this.email);}

shree.getEmail()
shree.enrollCourses("Nestjs API Creation")
shree.enrollCourses("Mongodb Crash Course")
console.log(shree.getCourseList())

let courses = shree.getCourseList()
courses.forEach((c)=>{console.log(c);})



