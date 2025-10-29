// Logga nummer 0-9.
for (let i = 0; i < 10; i++) {
    // console.log(i);
}

/// Logga nummer 111-133.
for (let i = 111; i <133; i++) {
    // console.log(i);
}

// Logga nummer 20-15. 
for (let i = 20; i > 15; i--) {
    // console.log(i);
}
// Logga nummer 50-0 med 5 steg i taget. Alltså 50, 45, 40 osv. 
for(let i = 50; i > 0; i -=5) {
    // console.log(i);
}

/// Logga nummer 1 till 128 med 100% ökning varje loop. Alltså 1, 2, 4, 8, 16 osv
for (let i = 1; i < 128; i *=2 ) {
    // console.log(i);
}


/// Här har skapat ol elementet som vi kommer att lägga till li element 
const list = document.createElement('ol');
document.body.appendChild(list);

/// Här skapar vi en loop som lägger till 10 li element i vår ol
/// Genom använda List Items variabeln för att skapa li element och lägga till dem i listan

let borderPixel = 0;

for (let i = 0; i < 10; i++) {
const listItems = document.createElement('li')
list.appendChild(listItems);
borderPixel++; 
listItems.innerText = 'This is list item';
listItems.style.margin = "10px";
listItems.style.border = `solid green ${borderPixel}px`;
}
// console.log( borderPixel)
// console.log(typeof borderPixel)



// for(let j = 0; j < 20; j++ ) {
//     const fakeh1 = document.createElement('h1')
//     document.body.appendChild(fakeh1)
//     fakeh1.innerText = 'Hello World!'
//     let hue = j * 5;

//      fakeh1.style.backgroundColor = `hsl(${hue}%, 0%, 0%)`
    
//         console.log(hue)
// }


for(let i=0; i<=20; i++) {

const fakeh2 = document.createElement('h2');
document.body.appendChild(fakeh2);
fakeh2.innerText = i;

const hue = i * 5; // Ändra färgen baserat på värdet av i

fakeh2.style.backgroundColor = `hsl(0, 0%, ${hue}%)`;

console.log(hue)
}

const getmyFakeh2 = document.querySelectorAll('h2')
for(i=0; i <=20; i++) {
    getmyFakeh2[i].style.color = "red";
     getmyFakeh2[i].style.backgroundColor = `hsl(0, 0%, ${i*5}%)`;
}

for(let i=0; i <=40; i++) {
    const fakeP = document.createElement('p');
    document.body.appendChild(fakeP);
    fakeP.innerText = "Hello Bottom!"
     fakeP.style.backgroundColor = `hsl(${i*9}, 80%, 50%)`;
}




