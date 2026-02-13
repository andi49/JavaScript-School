import express from "express";
import { addMovie, getMoviebByID, getMovies,deleteMovieByID, updateMovieRating } from "./fileoperation";

export const app = express();
app.use(express.json());
//<!---------------------------------------------------------------------------------------------------------------!>//
// GET /movies
// Hämtar antingen en specifik film (om ID finns i query) eller alla filmer
app.get('/movies', async (req, res) => {

    // Loggar alla query-parametrar som skickas med requesten
    console.log('Queries:', req.query)

    // Om det finns en query med ett id som är en string försöker vi hämta en enskild film
    if (typeof req.query.id === 'string') {
        console.log('ID')

        // Hämtar filmen baserat på ID
        const movie = await getMoviebByID(req.query.id);

        // Om filmen finns skickas den tillbaka som JSON
        if (movie) res.json(movie);
        // Om filmen inte finns returneras 404
        else res.status(404).json({ message: 'No Movie found with matching ID' })

    }
    // I annat fall hämtar vi alla filmer
    else {
        // Hämtar hela filmlistan
        const movies = await getMovies();
        console.log('Get all movies')

        // Returnerar alla filmer
        res.json(movies);
    }
})

//<!---------------------------------------------------------------------------------------------------------------!>//

// POST /movies
// Lägger till en ny film
app.post("/movies", async (req, res) => {

  try {
    // Skapar en ny film baserat på data från request body
    const newMovie = await addMovie(req.body);

    // Returnerar bekräftelse + skapad film
    res.json({ message: "sucess", newMovie });

  } catch (error) {
    // Loggar fel om något går fel vid skapandet
    console.log(error);
  }
});

//<!---------------------------------------------------------------------------------------------------------------!>//

// DELETE /movies
// Tar bort en film baserat på ID i query
app.delete('/movies', async (req, res)=>{
    
    // Kontrollerar att ID finns och är en string
    if (typeof req.query.id === 'string') {

        // Försöker ta bort filmen
        const movie = await deleteMovieByID(req.query.id);

        // Om filmen fanns och togs bort returneras den
        if (movie) res.json({message: 'Movie deleted', movie});

        // Om filmen inte finns returneras 404
        else res.status(404).json({ message: 'No Movie found with matching ID' })
    }
    // Om ID saknas returneras 400 Bad Request
    else {
        res.status(400).json({message: 'The request is missing an ID and/or rating'});
    }
})

//<!---------------------------------------------------------------------------------------------------------------!>//

// PATCH /movies
// Uppdaterar rating på en film baserat på ID
app.patch('/movies', async (req, res) => {

    // Kontrollerar:
    // 1. Att query innehåller ett ID (string)
    // 2. Att request body innehåller rating (number)
    if (typeof req.query.id === 'string' && typeof req.body.rating === 'number') {

        // Uppdaterar filmens rating
        const movie = await updateMovieRating(req.query.id, req.body.rating);

        // Om filmen finns returneras uppdaterad film
        if (movie) res.json({ message: 'Movi is fixed', movie });

        // Om filmen inte finns returneras 404
        else res.status(404).json({ message: 'No Movie found with matching ID' })
    }
    // Om ID eller rating saknas returneras 400 Bad Request
    else {
        res.status(400).json({ message: 'The request is missing an ID and/or ratng' });
    }
})
//<!---------------------------------------------------------------------------------------------------------------!>//

