import { Account } from "encrypted.js"


const account = new Account('savings', 0);

console.log(account.getName())

account.setName('house')
console.log(account.getName())

// account.generateID(); //ger error

account.nyEgenskap = 'lalalal'
console.log(account)

const account2 = new Account('sdfs', 0);
console.log(account2)