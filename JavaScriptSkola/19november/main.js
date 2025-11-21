const myObject = {
    textProperty: 'This text belongs to myObject',
    numberProperty: 33,
    arrayProperty: [1, 2, 3, 4],

    logSomething(parameter){
        console.log('Something', parameter.textProperty);
    }
};
myObject.logSomething(myObject);
console.log( myObject.textProperty );


const product = {
    name: 'Tomat',
    pris: '20',
    rabatt: '5',

    calcprice(calc) {
        const newprice = this.pris - this.rabatt
        console.log(newprice)
    }
}
product.calcprice(); // 15