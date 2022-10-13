class User{

    constructor(name, email){
        this.name = name
        this.email = email
    }
    
    #courseList = [] //Private variable

    getInfo(){
        return {name : this.name, email : this.email}
    }

    enrollCourses(courseName){
        this.#courseList.push(courseName)
    }

    // Private Function (Static makes it private)
    static getCourseList(){
        return this.#courseList
    }

    logIn(){
        return `You are logged in`
    }
}

module.exports = User

// Private variables and setters and getters
const dom = new User("Dom","dom@outlook.com")
dom.enrollCourses("Typescript Bootcamp")
// console.log(dom.getCourseList())
// console.log(dom.courseList)

// Inheritance

class SubAdmin extends User {
    constructor(name, email) {
        super(name,email)
    }
    
    getAdminInfo(){
        return `I am a Sub Admin`
    }

    logIn(){
        return `Only Admin can log in`
    }
}

const tom = new SubAdmin("Tom","tom@jerry.com")
console.log(tom.getAdminInfo())
console.log(tom.getInfo());
console.log(tom.logIn())
console.log(tom.getCourseList())
