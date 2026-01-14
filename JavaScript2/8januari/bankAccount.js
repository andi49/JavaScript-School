// bank account med FP
const createAccount = (name, balance) =>{return {name, balance} };

const account = createAccount('savings', 30000);
// console.log(account)

// sätta in pengar
const deposit = (acc, amount) => {
    const clone = {...acc};
    clone.balance += amount;
    return clone;
} 

const withdraw = (acc, amount) => {
    const clone = {...acc};
    if( amount <= clone.balance) clone.balance -= amount
    else {console.log('You dont have that much!')}
    return clone
    
}

const depositedAccount = deposit(account, 1000);
console.log(depositedAccount);

// const withDrawAccount = withdraw(depositedAccount, 4000);
// console.log(withDrawAccount);