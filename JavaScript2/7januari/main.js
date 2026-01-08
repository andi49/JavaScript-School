import { Account } from "./account.js";
import { AccountGUI } from "./accountGUI.js";
import { Person } from "./ovning.js";
import { Fighter } from "./ovning.js";

const account = new Account('savings', 1000);


account.setName('house')
console.log(account.getName())
console.log(account)

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

const userOne = new Person('Andi', 24)
console.log(userOne.present())
console.log(userOne)

const fighter = new Fighter("Alex", 1998, 10, 2, 1)
console.log(fighter.record())