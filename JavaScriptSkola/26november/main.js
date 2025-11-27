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
        .then( handleResponse )
        .then( displayDogImage )
        .catch(handleError)
}

function displayDogImage(dogObj){
    // console.log(dogObj);

    const img = document.querySelector('#dogImage');
    document.body.append(img);
    img.src = dogObj.message;
}


function handleResponse(response){
    console.log(response);
    if(response.status >= 200 && response.status < 300){
        return response.json();
    }
    else if(response.status >= 400 && response.status < 500){
        throw 'The breed does not exist. Please check your spelling.';
    }
    else if(!response.ok){
        throw 'Something went wrong. Please try again later.';
    }
}

function handleError(error) {
    console.log(error)
}