import express from "express"
// <!----------------------------------------------------------------------------------------------------------------!>
// console.log('Hello World again!')

// const greetings = 'Peace is a lie'
// console.log(greetings)

// const arr = [2,4,6,8,10]
// arr.forEach(num => console.log(num))
// <!----------------------------------------------------------------------------------------------------------------!>
// Väjer vilken port vi ska använda
const PORT = 3013;
// hämtar alla saker som vi kan t.ex use, listen etc
const app = express()

const users =  [
    {
        name: 'Andreas',
        age: 21,
        id: 202
    },

    {
        name: 'johan',
        age: 100,
        id: 387
    }
]

app.use(express.json())
// <!----------------------------------------------------------------------------------------------------------------!>
// hur man skickar request
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
             <link rel="shortcut icon" href="img/favicon/favicon-32x32.png" type="image/x-icon">
            <title>My first NODE.JS</title>
        </head>
        <body>
            <h1>Hej från Express!</h1>
            <p>GET request mottagen.</p>
        </body>
        </html>
    `);
});
// <!----------------------------------------------------------------------------------------------------------------!>
app.post('/users',(req, res) => {
    //Loggas i terminalen
    console.log('Recieved post request', req.body)

    /// Här generar vi nytt id dock använd ej! 
    const newUser = {...req.body, id: Math.ceil(Math.random()*100)}

    users.push(req.body)

    // Skicka tillbaka ett response med JSON-svar till klienten
    res.json({message: 'POST request received with data', 
              newUser: newUser.id 
            })
})
// <!----------------------------------------------------------------------------------------------------------------!>

app.get('/users', (req, res) =>{
    console.log('get users')
    res.json(users)
})
// <!----------------------------------------------------------------------------------------------------------------!>
// Öppnar porten
app.listen(PORT, () => {
    console.log('Im listening to port', PORT)
})
// <!----------------------------------------------------------------------------------------------------------------!>
