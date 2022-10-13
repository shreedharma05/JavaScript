// fill
var testArray = [1, 2, 3, 4, 5, 6, 7]
console.log(testArray.fill('sh',2,5))

// filter
const myNumber = [12,23,34,45,56,67,78,89,90]
const result = myNumber.filter((num)=>(num < 55))
console.log(result)

// slice
var users = ['tim', 'tom', 'sam', 'zak', 'poh']
console.log(users.slice(1,3))

// splice
users.splice(1,3,'sh','dh')
// .splice(start idx, count, string)
console.log(users)

