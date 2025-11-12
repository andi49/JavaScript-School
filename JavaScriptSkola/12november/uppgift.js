// Click button
const clickMeH1 = document.querySelector('h1')
const clickMeH2 = document.querySelector('h2')
const clickMeP = document.querySelector('p')
const buttonClick = document.querySelector('button')
console.log(clickMeH1)
console.log(clickMeP)
console.log(buttonClick)

clickMeH1.addEventListener('click', firstResponse)
clickMeP.addEventListener('click', secondResponse )
buttonClick.addEventListener('click',thirdResponse )


function firstResponse () {
clickMeH2.innerText = 'Du klickade på H1!'
    console.log('klickat')
}


function secondResponse () {
clickMeH2.innerText = 'Du klickade på P!'
    console.log('klickat')
}


function thirdResponse () {
clickMeH2.innerText = 'Du klickade på knappen'
    console.log('klickat')
}

clickMeH1.addEventListener('mouseenter', firstResponse)

function firstResponse () {
clickMeH2.innerHTML = window.alert("sometext")
}


