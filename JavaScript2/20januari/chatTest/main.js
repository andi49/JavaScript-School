import { usersRef, userMessageRef, db } from "./fireDataBase.js";
import { onValue, ref, push,update, get } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

let dbObj = {};

///<!-------------------------------------------------------------------------------------------------------------------->
onValue(usersRef, snapShot => {
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

    // When a user is selected, show their name and messages
    selectWrapper.addEventListener('change', () => {
      const selectedKey = selectWrapper.value;

      let content = document.querySelector('#content');
      if (!content) {
        content = document.createElement('div');
        content.id = 'content';
        document.body.appendChild(content);
      }

      content.innerHTML = '';

      if (!dbObj[selectedKey]) return;

      const selectedName = dbObj[selectedKey].name;

      const h1 = document.createElement('h1');
      h1.innerText = selectedName;
      content.append(h1);

      // Fetch all messages and filter by selected user name
      const messagesRef = ref(db, '/chatusers/messages');
      get(messagesRef).then(snapshot => {
        const messages = snapshot.val() || {};
        for (const msgKey in messages) {
          if (messages[msgKey].user === selectedName) {
            const p = document.createElement('p');
            p.innerText = messages[msgKey].message;
            content.append(p);
          }
        }
      });
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


