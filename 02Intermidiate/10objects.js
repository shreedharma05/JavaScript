var iphone14 = {
    brand : 'Apple',
    processor : 'A16 Bionic',
    cameraFront : 16,
    cameraRear : 12,
    battery : 3750,
    space : 512,
    eSim : true,
    price : 150000
}

console.log(iphone14.processor)
console.log(iphone14.price)
iphone14.price = 129999
console.log(iphone14['price'])
console.log(iphone14)
console.table(iphone14)
