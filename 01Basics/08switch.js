// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content

var user = 'testprenode 02Basics/switch'

switch(user) {
    case 'admin':
        console.log('gets full access')
        break
    case 'subadmin':
        console.log('gets access to create/delete courses')
        break
    case 'testprep':
        console.log('gets access to create/delete tests')
        break
    case 'user':
        console.log('gets access to consume content')
        break
    default:
        console.log('guest user')
}