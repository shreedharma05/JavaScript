var isLoggedIn = true
var isEmailVerified = true
var cardInfo = true

// if (isLoggedIn) {
//     console.log('Logged in Success')
//     if (isEmailVerified){
//         console.log('Email is verified')
//         if (cardInfo){
//             console.log('You can make a purchse')
//         }
//     }
// }

if (isLoggedIn && isEmailVerified && cardInfo){
    console.log('allow user to make a purchase')
} else {
    console.log('you are not allowed to make a purchase')
}