const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
const n = arr.length
var res = []

for (let i = 0; i < n; i++){
    for (let j = i+1; j < n+1; j++){
        let temp = arr.slice(i,j)
        res.push(temp)
    }
}

console.log(res)
