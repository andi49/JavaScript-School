// //En array med fyra Strings
// const trees = ['Oak', 'Bristlecone', 'Birch', 'Redwood'];
// console.log(trees);
// console.log(trees[1]);
// console.log(trees.length);


const cars = ['OPEL', 'BMW', 'HONDA', 'SEAT', 'NISSAN']

for (let i = 0; i < cars.length; i++) {
const fakeH3 = document.createElement('h3')
document.body.appendChild(fakeH3)                   
fakeH3.textContent = cars[i]    
console.log(fakeH3)


/// BAD PRACTICE =>

// if (cars[i] === cars[0] || cars[i] === cars[2]) {. 
//     fakeH3.style.color = 'blue'
// } else {
//     fakeH3.style.color = 'green'
// }

if (cars[i] === 'OPEL' || cars[i] === 'HONDA') {
    fakeH3.style.color = 'blue'
} else {
     fakeH3.style.color = 'green'
}

}


console.log('hello world')