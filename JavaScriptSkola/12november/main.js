// Click button
const clickMeBtn = document.querySelector('#clickMe')
console.log(clickMeBtn)

clickMeBtn.addEventListener('click', firstResponse)

function firstResponse () {
    console.log('klickat')
}

/// 1 2 3 knappar
const numberBtn = document.querySelectorAll('div button')
const h1 = document.querySelector('div h1')

numberBtn.forEach(btn => btn.addEventListener('click', logText))

function logText (event) {
    console.log(event.target.innerText)
    h1.innerText = event.target.innerText
    event.target.style.backgroundColor = 'lightblue'
}

/// FORM SECTION
const simpleForm = document.querySelector("#simpleForm");
simpleForm.addEventListener('submit', logInput);

function logInput(event){
    event.preventDefault(); //Gör så att browsern inte reloadar, vilket den annars gör som default
    // console.log('SUBMIT');

    // Textinputen
    const inputEl = simpleForm.querySelector('input');
    const color = inputEl.value;
    const colorDiv = document.querySelector('#colorDiv');
    colorDiv.style.backgroundColor = color;

    // Selectinputen
    const selectEl = simpleForm.querySelector('select');
    const size = selectEl.value;
    console.log(inputEl.value, selectEl.value);

    // Ändra storlek på colorDiv till liten, medium eller stor beroende på värdet av select
    if(size === 's'){
        colorDiv.style.height = '100px'
    }
    else if(size === 'm'){
        colorDiv.style.height = '200px';
    }
    else if( size === 'l' ){
        colorDiv.style.height = '300px';
    }
    // Obs tänk på att en number input value är av datatyp string

    simpleForm.reset();
}
// Ändra färg på colorDiv till färgen som användaren anger i inputen