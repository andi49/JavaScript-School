const numberarray = [1,2,3,4,5,6,7,8,9,10]

for (const element of numberarray) {
    console.log(element)
    
}

let randomNumber = Math.random()

while (randomNumber>= 0.1) {
    console.log(randomNumber)
    randomNumber = Math.random()
}

const favnum = 3

switch (favnum) {
    case 1:
        console.log('ett')
        break;

    case 2:
        console.log('två')
        break;
        
    case 3:
        console.log('tre')
        break;
}