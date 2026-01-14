

function swedishGreeting(name) {
    return function() {
        console.log(`Hej ${name}`)
    }
}

const sayHelloSwedish = swedishGreeting('Anna')

sayHelloSwedish()

function englishGreeting(name) {
    return function() {
        console.log(`Hello ${name}`)
    }
}

const sayHelloEnglish = englishGreeting('John')

sayHelloEnglish()

function spanishGreeting(name) {
    return function() {
        console.log(`Hola ${name}`)
    }
}

const sayHelloSpanish = englishGreeting('Carlos')

sayHelloSpanish()



const h1 = document.querySelector('#changeMe')

function changeColor(color) {
    return function() {
        h1.style.color = color
    }
}


const btnOne = document.querySelector('#btnPink')
const btnTwo = document.querySelector('#btnBlue')
const btnThree = document.querySelector('#btnRed')
const btnFour = document.querySelector('#btnGreen')


btnOne.addEventListener('click', changeColor('pink'))
btnTwo.addEventListener('click', changeColor('blue'))
btnThree.addEventListener('click', changeColor('red'))
btnFour.addEventListener('click', changeColor('green'))


///// Counter
const h2 = document.querySelector('#counter')


const btnFive = document.querySelector('#plusTen')
const btnSix = document.querySelector('#plusFive')
const btnSeven = document.querySelector('#minusFive')
const btnEight = document.querySelector('#minusTen')





// bank account med FP
const createAccount = (name, balance) =>{return {name, balance} };

const account = createAccount('savings', 250);
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


function changeCounter(amount) {
    return function() {
        h2.innerHTML = amount
    }
}

let currentAccount = createAccount('savings', 250);

const updateUI = acc => {
    currentAccount = acc;
    h2.innerHTML = acc.balance;
};

btnFive.addEventListener('click', () => {
    updateUI(deposit(currentAccount, 10));
});

btnSix.addEventListener('click', () => {
    updateUI(deposit(currentAccount, 5));
});

btnSeven.addEventListener('click', () => {
    updateUI(withdraw(currentAccount, 5));
});

btnEight.addEventListener('click', () => {
    updateUI(withdraw(currentAccount, 10));
});


h2.innerHTML = currentAccount.balance