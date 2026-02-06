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
   admin: true
}, 
{
    name: 'Jack',
    age: 89,
    admin: false
},
{
    name: 'Dani',
    age: 65,
    admin: false
},
{
    name: 'Chad',
    age: 34,
    admin: true
}

]

// <!----------------------------------------------------------------------------------------------------------------!>
//USE
app.use(express.json());

app.get('/', (req, response)=>{
    response.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Min första NODE.JS ÖVNING</title>
        </head>
        <body>
            <h1>Hej från Express!</h1>
            <p>GET request mottagen.</p>
        </body>
        </html>
    `)
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
        message: 'POST number added',  numbers: numbers, //här får du nya array med numbers
        message: `Number ${newNumber} been added` // här får bara själva numern
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


app.delete('/users/1', (req, response) => {
    console.log('delete', req.body)

    const oldUser = users[1]
   
    users.splice(1,1)
     response.json({
        message: `DELETE request received ${oldUser.name}`
    })
})
// <!----------------------------------------------------------------------------------------------------------------!>


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});