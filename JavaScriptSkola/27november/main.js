/// ASYNC WAIT
const form = document.querySelector('form')

form.addEventListener('submit', handleSubmit)

function handleSubmit (event) {
    event.preventDefault();

    const typeBreed = document.querySelector('#getTypeDogs').value.trim().toLowerCase();
    const getManyDog = document.querySelector('#getManyDogs').value.trim();

    form.reset()

    const urlKey = `https://dog.ceo/api/breed/${typeBreed}/images/random/${getManyDog}`;

    fetch(urlKey)
    .then(res => res.json())
    .then(displayPicture)
    .catch (
        console.error('Failed')
    )
}

function displayPicture (dogOBJ) {

    for (const imgUrl of dogOBJ.message) {

    const fakeImg = document.createElement('img')
    document.body.appendChild(fakeImg)
    fakeImg.src = imgUrl
     fakeImg.style.width = '100px'
    }
}