function renderCategories(categories, select) {

    categories.forEach(category  => {
        
        const option = document.createElement('option');
        option.innerText = category;
        option.value = category;

        select.append(option)

    });
}

function renderJoke(joke){
    const pEl = document.querySelector('#joke');
    pEl.innerText = joke;
}

export {renderCategories, renderJoke};