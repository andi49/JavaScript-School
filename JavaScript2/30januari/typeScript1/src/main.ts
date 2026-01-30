// Declare a variabel in TS   

let num = 13 
// num = 'test' // får inte göra så här!!! :(((())))

console.log(num)  /// det är fel 

let isSnowing: boolean

isSnowing = true

console.log(isSnowing)

const arr = [1,2,3,4,5, 'test']
arr.push('test') // man får inte göra så här, måste vara nummber eller om det finns en string kommer det funka

const newArr = [...arr]
console.log(newArr)

// Funktioner 

const add = (x:number, y:number) => {
  return x + y
}

console.log(add(6,7))

const logName = (first:string, last:string) => {
console.log(first, last)
}

logName('Andi', 'OnlyFans')

const multi = (x:number, y:number = 10) => {
  return x + y
}

console.log(multi(1))
console.log(multi(1,9))

const callback = (a:string) => {
  console.log(a)
}

const ho = (func:Function) => {
  func('hej')
}
ho(callback)

// union types

// const coinFlip = ():'heads' | 'tails' => {
//   return Math.random() > 0.5 ? 'heads' : 'tails'
// }

// console.log(coinFlip())

/// type alias

type Coin = 'heads' | 'tails'

const coinFlip = ():Coin => {
  return Math.random() > 0.5 ? 'heads' : 'tails'
}

console.log(coinFlip())

type CoinArray = [Coin, Coin, Coin]

const coins:CoinArray = [coinFlip(), coinFlip(), coinFlip()]

console.log(coins)