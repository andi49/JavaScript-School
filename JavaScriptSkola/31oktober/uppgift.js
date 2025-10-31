// for … of
//  Logga
// Utgå från den här arrayen: [324, 23, 5, 63, 0, 24, 32]
// Logga alla nummer med hjälp av en for of loop
// DOM
// Utgå från den här arrayen: ['Clara', 'Guido', 'Emma', 'Alrik', 'Caroline', 'Eric', 'Dominique']
// Visa varje namn genom DOM:en i valfritt element. 

const firsArray = [324, 23, 5, 63, 0, 24, 32]
for (let i = 0; i < firsArray.length; i++) {
    const fakeP = document.createElement('p')
    document.body.appendChild(fakeP)
    fakeP.style.textAlign = 'center'
    fakeP.textContent = firsArray[i]
}


const names = ['Clara', 'Guido', 'Emma', 'Alrik', 'Caroline', 'Eric', 'Dominique']

for (let j = 0; j < names.length; j++) {
    const fakeP = document.createElement('p')
    document.body.appendChild(fakeP)
    fakeP.style.textAlign = 'center'
    fakeP.textContent = names[j]
    console.log(names)
}



// while
// random
// logga ett random nummer så länge det är mer än 0.25.
// logga ett random nummer så länge det inte är mellan 0.3 och 0.4.
// Utmaning 
// Utgå från den här arrayen: [324, 23, 5, 63, 24, 32, 0]
// Använd Math.random() och Math.floor() för att få fram ett random nummer från 0 till det högsta indexet i arrayen.
// Använd en while loop och logga ett random nummer ur arrayen så länge det inte är lika med 0.


let randomNumber = Math.random()

while (randomNumber >= 0.25) {
    console.log(randomNumber)
    randomNumber = Math.random()
}


const numbers2 = [324, 23, 5, 63, 24, 32, 0]
let value;
let randomNumbers = Math.random()

while (value !== 0) {
    value = numbers2[Math.floor(Math.random() * numbers2.length)]
    console.log(value)
}



// Switch
// Månader
// Deklarera en variabel currentMonth som innehåller namnet på en månad
// Använd ett switch case för att skriva ut namnet på alla återstående månader av året i DOM:en. 
// Ex
// Om currentMonth innehåller “Oktober”
// DOM:en: 
// Oktober
// November
// December




// Bakgrundsfärg 
// Deklarera en variabel bgColor som innehåller en string för en färg. 
// Skapa och lägg till ett h1-element i DOM:en där innerText är värdet av bgColor
// Använd ett switch case för att ändra bakgrundsfärgen på h1-elementet beroende på värdet av bgColor. Använd minst tre olika värden.
// Använd ett default case för att göra bakgrundsfärgen grå.
// Ex
// Om bgColor innehåller “turkos”
// blir bakgrundsfärgen hsl(171, 65%, 78%) 






// Ternary 
// Högt/lågt nummer
// Deklarera en variabel som innehåller ett valfritt nummer 
// Använd ternary operator för att ändra texten på ett h1-element till följande
// om numret är större än 50: Högt nummer
// annars: Lågt nummer
// Dark mode
// I html-filen lägger du till ett valfritt element med valfri text.
// I css-filen skriver du en stilregler för klasserna 
// dark
// light
// Deklarera en variabel darkMode som innehåller en boolean.
// Använd ternary operator för att ändra klassen på html-elementet till
// light om darkMode är false
// dark om darkMode är true