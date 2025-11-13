const btnContainer = document.querySelector('#btnContainer')

btnContainer.addEventListener('click', checkBtn)

function checkBtn(event) {
    if(event.target.tagName === 'BUTTON') {
       console.log('en knapp', event.target)
    }
}