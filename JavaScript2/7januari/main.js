import { Account } from "./account.js";
import { AccountGUI } from "./accountGUI.js";

const account = new Account('savings', 0);

console.log(account.getName())

account.setName('house')
console.log(account.getName())

// account.generateID(); //ger error

// account.nyEgenskap = 'lalalal' //ger error eftersom vi returnerar a sealed object i construktorn
// console.log(account)

const account2 = new Account('Test', 10000);
console.log(account2)

const aGUI = new AccountGUI('Car', 3000);
console.log(aGUI)

aGUI.renderAccount(document.body)

const toggle = document.querySelector('button');
toggle.addEventListener('click', event =>{
    aGUI.toggleDarkMode();
    console.log(aGUI)
})