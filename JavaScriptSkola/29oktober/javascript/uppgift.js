// Deklarera en Array som innehåller 7 fruktnamn. 
// Logga hela arrayen i konsolen.
// Använd en for-loop för att logga alla namnen, ett i taget, i konsolen.
// Använd en for-loop för att skapa och lägga till h1-element till DOM:en. 
// Det ska finnas lika många h1-element som fruktnamn i Arrayen. 
// Varje h1-element ska ha ett fruktnamn som text-innehåll. Varje fruktnamn ska användas en gång.
// Välj två olika frukter och använd if-statements för att sätta bakgrundsfärgen till samma färg som frukten. (Alltså om det är banan ska bakgrundsfärgen vara gul, om apelsin orange, osv.)


const fruit = ['Äpple', 'Annans', 'Tomat', 'Päron', 'Dörja', 'Appelsin', 'Vindruvor']

// console.log(fruit)

for (let i = 0; i < fruit.length; i++) {
 const fakeH1 = document.createElement('h1')
 document.body.appendChild(fakeH1)
 fakeH1.textContent = fruit[i]
 console.log(fruit[i])

 if(fruit[i] === 'Äpple')
{
    fakeH1.style.color = 'green'
} else if (fruit[i] === 'Dörja') {
 fakeH1.style.color = 'red'
} else {
    
}
}



// Skapa en array med 10 nummer mellan 0 och 360. Logga värdena ett och ett i konsolen. 
// Gör precis som i Frukt-övningen och skriv ut alla nummer i html-element i DOM:en. (Valfritt element.)
// Sätt bakgrundsfärgen på varje html-element genom att använda numret som hue i hsl(hue, saturation, lightness).
// Om numret är över 180 ska lightness vara 80%, om numret är under eller lika med 180 ska lightness vara 20%. 
// Ändra även textfärgen så att texten alltid syns ordentligt. 


const number = [10,100,200,25,55,23,1,44,32,89, 180]

for (let j = 0; j < number.length; j++) {
const fakeP = document.createElement('p')
 document.body.appendChild(fakeP)
 fakeP.textContent = number[j]
 console.log(number[j])
    
 if(number[j] > 180){
fakeP.style.backgroundColor = 'hsl(0, 0%, 80%)'
 } else if (number[j] <= 180){
     fakeP.style.backgroundColor = 'hsl(0, 0%, 20%)'
 } else {

 }

}

// Skapa en array med valfritt innehåll. Arrayen ska ha minst 9 värden. 
// Skriv ut alla värdena i DOM:en (valfritt html-element, ett html-element per array-element.)
// Ge en valfri border till vartannat element. 
// Sätt textstorleken på de element som inte har en border till större än default. 

const alpah = ['a','b','c','d','e','f','g','h','i','j','k','l']

for (let l = 0; l < alpah.length; l++) {
   const fakeH3 = document.createElement('h3')
 document.body.appendChild(fakeH3)
 fakeH3.textContent = alpah[l]
 console.log(alpah[l])
    
 if (l % 2 === 0) {
    fakeH3.style.border =  'red 2px solid'
 }
else {
    fakeH3.style.fontSize =  `${l*1.5}em`
 }
}


// Skapa en array med 15 nummer.
// Skapa ett h3-element för varje nummer i arrayen. 
// Om numret är jämnt ska h3-elementets innerText vara ‘# är ett jämnt tal’ (där # byts ut mot numret)
// Om numret är udda ska h3-elementets innerText vara ‘# är ett udda tal’ (där # byts ut mot numret)
// Ändra även på utseendet för elementet så att det ser olika ut beroende på om det är jämnt eller udda. 

const numb2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

for (let m = 0; m < numb2.length; m++) {
const fakeh3p = document.createElement('h3')
 document.body.appendChild(fakeh3p)
 fakeh3p.textContent = numb2[m]
 console.log(numb2[m])
    
 if(numb2[m] % 2 === 0 ) {
    fakeh3p.innerText = '#'
 } else if (numb2[m] % 2 === 1 ) {
    fakeh3p.innerText = '#'
    fakeh3p.style.color = 'red'
 } else{
    console.log(console.error(error));
    
 }
} 

// Skapa 3 Arrayer med 10 ord i varje. Orden kommer sättas ihop till meningar. 
// Första arrayen ska innehålla substantiv, namn eller pronomen. Alltså ‘Bordet’, ‘Bob’, ‘Jag’, ‘Han’ osv.
// Andra arrayen ska innehålla verb. Alltså ‘springer’, ‘hoppas’, ‘jagar’ osv.
// Tredje Arrayen är lite mer fri men de ska gå att sätta ihop som meningar med ord från de två första arrayerna.
//  De kan t.ex. vara adjektiv eller substantiv.  Alltså ‘inte’, ‘dåligt’, ‘vargar’, osv. 

// Sätt ihop meningar från de tre arrayerna. Första ordet från första arrayen, 
// första ordet från andra arrayen, första ordet från tredje arrayen. Gör detta 10 gånger så att du får ut 10 meningar.
// Logga varje mening och visa den i DOM:en med ett valfritt element
// Resultat:
// Bordet springer inte.
// Bob hoppas dåligt.
// Jag jagar vargar.


const word = ['Bordet','bob','jag','han']
const word2 = ['springer','hoppas','jagar']
const word3 = ['inte','dåligt','vargar',]

for (let z = 0; z < 10; z++) {
console.log(word[z] + ' ' + word2[z] + ' ' + word3[z])
}


const importantNames = ['Clara', 'Guido', 'Alrik','Elias']
const names = ['Signe', 'Noura', 'Alrik', 'Elias', 'Maja', 'Trung', 'Dalya', 'Clara', 'Sergio', 'Bianca', 'Guido', 'Soraya']

for (let n = 0; n < names.length; n++) {
   const fakep2 = document.createElement('p')
   document.body.appendChild(fakep2)
   fakep2.textContent = names[n]

   if (names[n] == importantNames[n]) {
    fakep2.style.fontWeight = 'bold'
    fakep2.style.color = 'black'
   } else {
     fakep2.style.color = 'gray'
   }
    
}


const word4 = ['Bordet','bob','jag','han']
const word5 = ['springer','hoppas','jagar', 'går']
const word6 = ['inte','dåligt','vargar','sover']

for (let o = 0; o < word4.length; o++) {
   const fakep3 = document.createElement('p')
   document.body.appendChild(fakep3)
  
    
}