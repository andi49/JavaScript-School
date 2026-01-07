class Account{
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        if(amount>this.balance){
            console.log('not enough funds');
        }
        else{
            this.balance -= amount;
            console.log('new balance', this.balance);
        }
    }
    showBalance(){
        console.log(this.balance);
    }
}

const a1 = new Account('house', 0)
const a2 = new Account('car', 20000)

console.log(a1)
console.log(a2)

a1.deposit(10000)
a1.showBalance();

a2.withdraw(100)

