// define a function that can answer the role of a user
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content
// other - guest user
// function getUserRole(name, role) -> input

// function getUserRole(name, role){

// var getUserRole = function (name, role){

var getUserRole = (name, role) => { 
    switch(role){
        case 'admin':
            return `${name} is the admin and gets full access`
        case 'subadmin':
            return `${name} is a sub-admin and gets access to create/delete courses`
        case 'testprep':
            return `${name} is a test prep and gets access to create/delete tests`
        case 'user':
            return `${name} is a user and gets access to consume all content`
        default:
            return `${name} is a guest user`     
    }

}

console.log(getUserRole('Romeo', 'admin'))
