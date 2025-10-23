// // QuerySelector shorthand for get css names

// document.querySelector('a') // returns the first matching element

// // QuerySelectorAll shorthand for get all css names
// console.log(document.querySelectorAll('a') )



// console.log(document.getElementsByTagName('p') ) // returns all matching elements as an HTMLCollection

// console.log(document.getElementsByTagName('p')[2] ) // returns the third matching element


// document.querySelector('h2').innerText = "Hello World!" // changes the text of the first h1 element


// document.querySelectorAll('article')[1].innerHTML = 
// "<h3>New Article</h3><p>This is a new article added via JavaScript.</p>" // changes the inner HTML of the second article element

// document.querySelectorAll('article')[1].style.border = "5px solid red" // adds a red border to the second article element

// document.querySelectorAll('img')[2].src = "https://randomwordgenerator.com/img/picture-generator/54e4d5474250a914f1dc8460962e33791c3ad6e04e5074417d2c7ed1924cc7_640.jpg" // adds padding to the second article element

// ///class

// document.querySelectorAll('a')[1].classList.add('active') // adds the class 'active' to

// document.querySelectorAll('a')[1].classList.remove('active') // removes the class 'active' from

// const firstLink = document.querySelector('a');
// console.log('variabel', firstLink)


// const newtext = 'Ny text';
// firstLink.innerText = newtext; // changes the text of the first link to 'Ny text'   
// firstLink.style.color = 'red'; // changes the color of the first link to red

// // How to remove doom elements

// const removeMe = document.querySelector('h2');

// removeMe.remove(); // removes the first h3 element from the DOM

// // How to create new doom elements

// const secondArticle = document.querySelectorAll('article')[1];

// console.log(secondArticle)

// const Pelement = document.createElement('p');
// Pelement.innerText = "This is a new paragraph added via JavaScripts.";

// secondArticle.appendChild(Pelement); // adds the new paragraph to the second article

// övning


document.querySelector('h3').innerText = "Potato" // changes the text of the first h3 element

document.querySelectorAll('a')[0].innerHTML = 'start'


document.querySelectorAll('a')[2].innerHTML = 'mail us'

document.querySelectorAll('p')[1].innerHTML = 'hello world'

document.querySelector('footer p').innerText = 'hitte på gatan45';

document.querySelectorAll('button')[0].style.backgroundColor = 'blue';

document.querySelectorAll('button')[0].innerText = 'blue';

document.querySelectorAll('button')[1].style.backgroundColor = 'red';

document.querySelectorAll('button')[1].innerText = 'red';

document.querySelectorAll('button')[2].style.backgroundColor = 'black';

document.querySelectorAll('button')[2].innerText = 'black';

const links = document.querySelectorAll('nav a');
links[0].innerText = 'home'; // changes the first one
links[0].href = '#home';

document.querySelectorAll('img')[4].src = 
'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nicolas_Cage_-_66ème_Festival_de_Venise_%28Mostra%29.jpg/250px-Nicolas_Cage_-_66ème_Festival_de_Venise_%28Mostra%29.jpg';

document.querySelectorAll('img')[4].alt = 'Nicolas Cage';

document.querySelectorAll('img')[2].src = 'https://placedog.net/500'

document.querySelectorAll('img')[3].src = './img/hoodie-ocean.png'
 