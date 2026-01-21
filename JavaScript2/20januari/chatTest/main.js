import { usersRef, userMessageRef, db } from "./fireDataBase.js";
import { onValue, ref, push,update } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

let dbObj = {};
const messagesRef = ref(db, '/chatusers/messages/message');
///<!-------------------------------------------------------------------------------------------------------------------->
onValue(usersRef,  snapShot => {
  dbObj = snapShot.val();
   
 const selectWrapper = document.querySelector('#select')
    selectWrapper.innerHTML = '';

    for (const key in dbObj) {
 
    const option = document.createElement('option');

            
    ref(db, '/chatusers/users/' + key); 
   

    option.value = key;             
    option.innerText = dbObj[key].name;

    selectWrapper.append(option);  
    console.log(key, dbObj[key]);    
  }

selectWrapper.addEventListener('change', () => {
   
    const existingH1 = content.querySelector('h1');
    if (existingH1) existingH1.remove();

    // Get selected key
    const selectedKey = selectWrapper.value;

    if (messagesRef[selectedKey]) {
        const fakeH1 = document.createElement('h1');
        const textP = document.createElement('p')
        fakeH1.innerText = messagesRef[selectedKey].name;
        textP.innerText = messagesRef[selectedKey].message;
        content.append(fakeH1, textP);
    }
    console.log(messagesRef[selectedKey].message)
});

});

///<!-------------------------------------------------------------------------------------------------------------------->
const form = document.querySelector('form')

form.addEventListener('submit', event => {
   event.preventDefault()

   const message = document.querySelector('#messageText').value
   const userSelect = document.querySelector('#select')

   const selectedName = userSelect.options[userSelect.selectedIndex].text;

   const newID = push(usersRef).key;
       if(newID){
            const newRef = ref(db, '/chatusers/messages/' + newID)
           update(newRef, 
            {
            user: selectedName,
            message: message
        })
       }
})


