//// LOOPS ////

/// let i = 0; its a variable that starts at 0
/// i < 5; its a condition that stops the loop when i is no longer less than 5
/// i++; its an increment that increases the value of i by 1 each time the loop runs

for (let i = 0; i < 5; i++) 
{
    console.log("For loop iteration: " + i);
    const fakeh1 = document.createElement('h1');
    document.body.appendChild(fakeh1);
    fakeh1.innerText = "This is a fake h1.";
}

for (let j = 10; j > 0; j--) 
{
    console.log("For loop countdown: " + j);
}


for (let k = 0; k < 14; k += 2) 
{
    console.log("Even number: " + k);
}

// HSL color

// const fakeh2 = document.createElement('h2');
// document.body.appendChild(fakeh2);

// fakeh2.innerText = "HSL Color";

// fakeh2.style.color = "hsl(200, 100%, 50%)";

for(let i=0; i<=20; i++) {

const fakeh2 = document.createElement('h2');
document.body.appendChild(fakeh2);
fakeh2.innerText = i;

const hue = i * 18; // Ändra färgen baserat på värdet av i

fakeh2.style.color = `hsl(${i}, 80%, 50%)`;

}