// const numberArray = [1,2,3,4,5,6,7,8,9]

function Addation (m) {
let value = 1;
value += m;
return value;

}
console.log(Addation(5))

function MultyPli (m) {

let value = 2; 
value *= m;
return value;

}
console.log(MultyPli(5))

 function myArray (arrays, callback) {
 const Mynumber = []  

for (let i = 0; i < arrays.length; i++) 
{
    Mynumber[i] = callback(arrays[i])
}
     return Mynumber;
}

const olo = [1,2,3,4,5,6,7,8,9]
console.log(myArray(olo, MultyPli))




//mapArray är en higher-order-funktion

//getHalf är en callback-funktion som tar ett nummer, 
// dividerar det med två och returnerar resultatet
function getHalf(m) 
{ 
let value = 1;
value /= m;
return value;
}
//array är den array som används som argument
function array (array) 
{

}
//halfArray är den arrayen som returneras av mapArray


const array = [3, 6, 8, 2];
const halfArray = mapArray(array, getHalf);
console.log(halfArray); // Loggar: [1.5, 3, 4, 1]
