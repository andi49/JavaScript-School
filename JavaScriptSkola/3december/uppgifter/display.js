
function createIMG(url) {
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
}

export{createIMG}