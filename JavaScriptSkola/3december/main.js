import { getCategories, getJoke } from "./apiModuelCall.js";
import { renderCategories, renderJoke } from "./gui.js";

const select = document.querySelector('#categorySelect');

app();

async function app(){

    
    const categories = await getCategories();
    renderCategories(categories, select);

    select.addEventListener('change', async ()=>{
        const joke = await getJoke(select.value);
        renderJoke(joke);
    })
}

