// Query Selector
// use "." for class
// use "#" for id
// nothing for tags

var counter = document.querySelector(".counter")
var followers = document.querySelector(".followers")

var count = 1
setInterval(() => {
    if (count < 1000){
        count++
        counter.innerText = count
    }
},5)

setTimeout(()=>{
    followers.innerHTML = "Followers on Instagram"
},5000)
var counter = document.getElementsByClassName('counter')
let count = 1
setInterval(() => {
    if (count < 1000) {
        count++
        counter[0].innerText = count
    }
},0.5)

var follower = document.getElementById('F')
setTimeout(() => {
    follower.innerText = 'Followers on Instagram'
},3000)
