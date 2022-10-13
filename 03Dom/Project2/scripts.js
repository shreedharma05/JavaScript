const red = document.querySelector(".red")
const cyan = document.querySelector(".cyan")
const violet = document.querySelector(".violet")
const orange = document.querySelector(".orange")
const pink = document.querySelector(".pink")

const center = document.querySelector(".center")

// console.log(window.getComputedStyle(red).backgroundColor)

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor
}

// var color = getBGColor(pink)

// orange.addEventListener("mouseenter",()=>{
//     center.style.background = orangeElementColor
// })

const magicColor = (element, color)=>{
    return element.addEventListener("mouseenter",()=>{
        center.style.background = color
    })
}

magicColor(red, getBGColor(red))
magicColor(orange, getBGColor(orange))
magicColor(pink, getBGColor(pink))
magicColor(violet, getBGColor(violet))
magicColor(cyan, getBGColor(cyan))


// -----------------------------------------------------------------------------------------------------------------

var User = function(firstName, courseCount){
    this.firstName = firstName                 //Functional approach of defining objects
    this.courseCount = courseCount             //Functional approach of defining objects
    this.getCourseCount = function(){
        console.log(`${this.firstName} has enrolled in ${this.courseCount} courses`)
    }
    
}

User.prototype.getFirstname = function(){
    console.log(`Your firstname is : ${this.firstName}`)
}
