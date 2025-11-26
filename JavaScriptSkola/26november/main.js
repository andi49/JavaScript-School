/// Async med Fetch & Promises - Agenda
const url = 'https://dog.ceo/api/breeds/image/random';

// const requestPromise = fetch(url)

// console.log(requestPromise)

// requestPromise.then(
//     function(responseOBJ) {
//         console.log(responseOBJ)
//         // console.log(responseOBJ.json())
//         return responseOBJ
//     }
// )

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit );

function handleSubmit(event){
    event.preventDefault();

    const breed = document.querySelector('input').value;
    console.log(breed);
    form.reset();

    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    // console.log(url);
    fetch(url)
        .then( response => response.json() )
        .then( displayDogImage );
}

function displayDogImage(dogObj){
    console.log(dogObj);

    const img = document.querySelector('#dogImage');
    document.body.append(img);
    img.src = dogObj.message;
}