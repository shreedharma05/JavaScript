// Destructure in arrays
// const user = ["Shree dharma",5,"Admin"]
// // console.log(user[2])
// // console.log(user[0])

// var [name, courseCount, role] = user
// // console.log(role)

// // Destructure in objects

const myUser = {
    name : "Shree dharma",
    courseCount : 10,
    role : "Admin"
}

console.log(myUser.courseCount)

var {name, myCourseCount, role} = myUser
console.log(myCourseCount)
console.log(role)
