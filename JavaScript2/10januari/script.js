import { patchName, getAll, post, patchExisting, patchDelete } from "./server.js";

getAll()
    .then( data =>{
        console.log(data)

        for(const key in data){
            console.log(key)
        }
    })


document.querySelector('#patchName').addEventListener('click', ()=>{
    patchName();
})

document.querySelector('#patchPost').addEventListener('click', ()=>{
    post({middleName: 'bil'});
})


// Patch för att lägga till en nod med ditt namn
document.querySelector('#patchExisting').addEventListener('click', () => {
    patchExisting();
})

// Patch för att lägga till en nod med ditt namn
document.querySelector('#patchDelete').addEventListener('click', () => {
    patchDelete();
})