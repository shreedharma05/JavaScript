var user = {
    firstName : 'Shree dharma',
    lastName : 'Kr',
    role : 'Admin',
    loginCount : 32,
    googleSignedIn : true,
    courseList : [],
    buyCourse :function(courseName){
        this.courseList.push(courseName)
    },
    getCourseCount : function(){
        return `${this.firstName} has enrolled in ${this.courseList.length} courses `
    },
    info : function(){
        return `${this.firstName} ${this.lastName} is the ${this.role} and purchased ${this.courseList.length} courses, they are ${this.courseList}`
    }
}
console.log(user.getCourseCount())
user.buyCourse('React JS Bootcamp')
user.buyCourse('Angular course')
console.log(user.courseList)
console.log(user.getCourseCount())
console.log(user.info())

