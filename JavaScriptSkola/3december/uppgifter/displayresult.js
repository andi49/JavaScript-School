function displayRes (text) {
 const fakeh1El = document.createElement('h1')

 fakeh1El.innerText = text
 document.body.appendChild(fakeh1El)
}


export {displayRes}