// PROTOTYPE
// För info om hur prototype finns överallt i js 
// console.log(document)
// console.log(Object.getPrototypeOf(document))

// const obj = {
//     p:1 
// }

// console.log(obj)

// function test(){}

// console.log(test)


function Animal(type, sound) {
    this.type = type
    this.sound = sound
}

Animal.prototype.makeSound = function() {
    console.log(`The ${this.type} says ${this.sound}`)
}


const cat = new Animal('cat', 'meow')
const bird = new Animal('bird', 'pipi')

console.log(cat, bird)

cat.makeSound()
bird.makeSound()
