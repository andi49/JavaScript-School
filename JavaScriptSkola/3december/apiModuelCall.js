// Chuck Norris jokes - https://api.chucknorris.io/ 

const base_url = 'https://api.chucknorris.io/jokes/';

async function getCategories(){
    const url = base_url + 'categories';

    const response = await fetch(url);
    const categories = await response.json();

    return categories;
    
}

async function getJoke(category) {
    const url = base_url + `random?category=${category}`

    const response = await fetch(url)
    const joke = await response.json()

    return joke.value
}

export {getCategories, getJoke};