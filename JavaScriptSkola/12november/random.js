const random = Math.random()
const randomTen = random * 10 
const flooredRadnom = Math.floor(randomTen)
console.log(random, randomTen, flooredRadnom)

const arr = ['ett','två','tree','fyra','fem','sex']

const randomIndex = Math.floor(Math.random() * arr.length)

console.log(randomIndex, arr[randomIndex])