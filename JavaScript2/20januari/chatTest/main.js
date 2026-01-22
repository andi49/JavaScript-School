import { usersRef, userMessageRef, db } from "./fireDataBase.js";
import { onValue, ref, push,update, get } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

let dbObj = {};
let selectedName = null;

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
      if (!dbObj[selectedKey]) return;

      selectedName = dbObj[selectedKey].name;

      let content = document.querySelector('#content');
      if (!content) {
        content = document.createElement('div');
        content.id = 'content';
        document.body.appendChild(content);
      }

      content.innerHTML = '';

      const h1 = document.createElement('h1');
      h1.innerText = selectedName;
      content.append(h1);

      // Render current messages immediately
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

// Real-time listener: update shown messages when new messages are added
const liveMessagesRef = ref(db, '/chatusers/messages');

function renderSelectedUserMessages(messages) {
  if (!selectedName) return;

  let content = document.querySelector('#content');
  if (!content) {
    content = document.createElement('div');
    content.id = 'content';
    document.body.appendChild(content);
  }

  content.innerHTML = '';
  const h1 = document.createElement('h1');
  h1.innerText = selectedName;
  content.append(h1);

  for (const id in messages) {
    if (messages[id].user === selectedName) {
      const p = document.createElement('p');
      p.innerText = messages[id].message;
      content.append(p);
    }
  }
}

onValue(liveMessagesRef, snapshot => {
  const messages = snapshot.val() || {};
  renderSelectedUserMessages(messages);
});


