

//5 olika datatyper
let stringVariabel = "Some text";
let numberVariabel = 0.826;
let booleanVariabel = true;
let h1Variabel = document.querySelector('h1');
let undefinedVariabel;

const fakeP = document.createElement('p');
document.body.appendChild(fakeP);
fakeP.textContent = "This is a fake paragraph.";

//för att ta reda på vilken datatyp en variabel har kan man använda keyword typeof
console.log(typeof stringVariabel);
console.log(typeof numberVariabel);
console.log(typeof booleanVariabel);
console.log(typeof h1Variabel);
console.log(typeof undefinedVariabel);
console.log(typeof fakeP);