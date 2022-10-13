var myMap = new Map

myMap.set(1,"One")
myMap.set(2,"Two")
myMap.set(3,"Three")
myMap.set(4,"Four")

console.log(myMap)

for (let key of myMap.keys()) {
    console.log(`key is ${key}`)    
}
for (let value of myMap.values()) {
    console.log(`value is ${value}`)    
}
for (let [key,value] of myMap) {
    console.log(`key is ${key} and the value is ${value}`)    
}

myMap.forEach( (value,key)=>{console.log(`${value} and key is ${key}`)})
