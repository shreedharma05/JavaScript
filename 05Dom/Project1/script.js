const courses = [
    {
        name : "Complete ReactJS Course",
        price : "2.3"
    },
    {
        name : "Complete Angular Course",
        price : "2.5"
    },
    {
        name : "Complete MERN Course",
        price : "2.8"
    },
    {
        name : "Complete Python Course",
        price : "2.0"
    },
    {
        name : "Complete TypeScript Course",
        price : "2.2"
    }
]

{/* <ul class="list-group">
        <li class="list-group-item">
          Javascript course<span class="float-right">$2.1</span>
        </li>
      </ul> */}

function generateLIST(){
    const ul = document.querySelector(".list-group")
    ul.innerHTML = ""
    courses.forEach((course)=>{
        const li = document.createElement("li")
        li.classList.add("list-group-item")
        
        const name = document.createTextNode(course.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")

        const price = document.createTextNode("$ " + course.price)
        span.appendChild(price)
        
        li.appendChild(span)
        ul.appendChild(li)
        
    })
}

window.addEventListener("load", generateLIST)

const button = document.querySelector(".sort-btn")

button.addEventListener("click", () => {
    courses.sort((a,b)=>a.price - b.price)
    generateLIST()

})

const button2 = document.querySelector(".btn-success")
button2.addEventListener("click", ()=>{courses.sort((a,b)=> a.price - b.price).reverse();generateLIST()})

