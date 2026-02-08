import express, { response } from "express"

// Väjer vilken port vi ska använda
const PORT = 3013;
// hämtar alla saker som vi kan t.ex use, listen etc
const app = express()

const numbers = [1,2,3,4,5,6,7,8,9,10]

const users = [
{
   name: 'Andi',
   age: 23,
   admin: true,
   id: 10
}, 
{
    name: 'Jack',
    age: 89,
    admin: false,
    id: 20
},
{
    name: 'Dani',
    age: 65,
    admin: false,
    id: 30
},
{
    name: 'Chad',
    age: 34,
    admin: true,
    id: 40
}

]

// <!----------------------------------------------------------------------------------------------------------------!>
//USE
app.use(express.json());

app.get('/', (req, response) => {
   
    const userListItems = users.map(users => `<li>${users.name} ${users.id}</li>`).join('');
    const numberListItems = numbers.map(number =>  `<li>${number}</li>`).join('')
    response.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Min första NODE.JS ÖVNING</title>
        </head>
        <body>
            <h1>Hej från Express!</h1>
            <p>GET request mottagen.</p>

            <h2>Användare:</h2>
            <ul>
                ${userListItems}
            </ul>

               <h2>Nummer:</h2>
            <ul>
                ${numberListItems}
            </ul>
        </body>
        </html>
    `);
});
// <!----------------------------------------------------------------------------------------------------------------!>
/// 
app.get('/numbers', (req, response) => {
    /// konsolar terminal 
    console.log('Get numbers', req.query)
    /// skicar json till klient
    response.json(numbers)
})

app.get('/users', (req, response) => {
    console.log('Get users', req.query)
    response.json(users)

})
// <!----------------------------------------------------------------------------------------------------------------!>
app.post('/numbers', (req, response) => {
    console.log('New post number', numbers)

    const newNumber = req.body.numbers

    numbers.push(newNumber)

    response.json({
        message: 'POST number added',  numbers: numbers, 
        message: `Number ${newNumber} been added`
    })
})

app.post('/users', (req, response) => {
    console.log('New post user', users)

    const newUser = {...req.body, id: Math.ceil(Math.random()*100) };

    users.push(newUser)

    response.json({
        message: 'POST request received',
        newUser: newUser.id
    })
})
// <!----------------------------------------------------------------------------------------------------------------!>
app.put('/numbers/1', (req, response) => {
        console.log('put', req.body)

    const newNumber = Number(req.body.number)

    const oldNumber = numbers[1]

    numbers[1] = newNumber

    response.json({
        message: `Number ${oldNumber} replaced with ${newNumber}`
    })
})

app.put('/users/1', (req, response) => {
    console.log('put', req.body)

    const user = users[1]
    const oldAdmin = user.admin
    
    user.admin = req.body.admin


    response.json({
        message: `User ${user.name} is now a ${oldAdmin}`
    })
})
// <!----------------------------------------------------------------------------------------------------------------!>
app.delete('/numbers/4', (req, response) => {
    console.log('delete', req.body)

    const oldNumber = numbers[4]

    numbers.splice(4,1)
    response.json({
        message: `Delete request received ${oldNumber}`
    })
})


app.delete('/users/3', (req, response) => {
    console.log('delete', req.body)

    const oldUser = users[3]
   
    users.splice(3,1)
     response.json({
        message: `DELETE request received ${oldUser.name}`
    })
})
// <!----------------------------------------------------------------------------------------------------------------!>
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});