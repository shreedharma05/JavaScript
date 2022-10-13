var shreedharma = {
    firstName : "Shree dharma",
    lastName : "Kr",
    role : "JS Developer",
    courseCount : 3,
    getInfo : function () {
        console.log(`
        First Name is : ${this.firstName}
        Last Name is : ${this.lastName}
        His role is : ${this.role}
        And his course count is : ${this.courseCount}
        `)
    }
}

const G310r = {
    firstName : "G 310r",
    lastName : "BMW",
    role : "Traveler",
    courseCount : 4
}

shreedharma.getInfo()

// Bind
var G310rInfo = shreedharma.getInfo.bind(G310r)
G310rInfo()

// Call
shreedharma.getInfo.call(G310r)
