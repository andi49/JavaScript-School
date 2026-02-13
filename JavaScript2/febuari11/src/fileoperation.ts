import fs from "fs/promises";
import crypto from "crypto";

const MOVIES_FILE_PATH = "./public/movies.json";
// <!---------------------------------------------------------------------------------------------------------------!>
// Funktion som hämtar alla filmer från JSON-filen
const getMovies = async () => {
  // Läser filen som innehåller filmer och får tillbaka text (json-sträng)
  const jsonMovies = await fs.readFile(MOVIES_FILE_PATH, "utf-8");

  // Konverterar JSON-strängen till en JavaScript-array med filmobjekt
  const movies = await JSON.parse(jsonMovies);

  // Returnerar listan med filmer
  return movies;
};
//<!---------------------------------------------------------------------------------------------------------------!>
// fixar typen nästa gång
// Funktion som lägger till en ny film i listan
const addMovie = async (movie: any) => {
  // Hämtar alla befintliga filmer
  const movies = await getMovies();

  // Skapar en ny film baserat på inkommande movie + genererar ett unikt ID
  const newMovie = { ...movie, id: crypto.randomUUID() };

  // Lägger till den nya filmen i arrayen
  movies.push(newMovie);

  try {
    // Skriver tillbaka hela film-listan till filen (sparar ändringen)
    // null, 2 gör JSON-filen snyggt formatterad (indentation)
    await fs.writeFile(MOVIES_FILE_PATH, JSON.stringify(movies, null, 2));

    // Returnerar den nya filmen som skapades
    return newMovie;
  } catch (error) {
    // Loggar fel om något går fel vid sparning
    console.log("Something went wrong", error);
  }
};
//<!---------------------------------------------------------------------------------------------------------------!>
// Hämtar en specifik film baserat på dess ID
const getMoviebByID = async (id: string) => {
  // Hämtar alla befintliga filmer från lagringen
  const movies = await getMovies();

  // Letar upp indexet för filmen med matchande ID
  const index = movies.findIndex((movie: any) => movie.id === id);

  // Om filmen inte hittas returneras inget (undefined)
  if (index === -1) return;
  // Annars returneras filmen som hittades
  else return movies[index];
};

//<!---------------------------------------------------------------------------------------------------------------!>

// Tar bort en film baserat på dess ID
const deleteMovieByID = async (id: string) => {
  // Hämtar alla befintliga filmer från lagringen
  const movies = await getMovies();

  // Letar upp indexet för filmen med matchande ID
  const index = movies.findIndex((movie: any) => movie.id === id);

  try {
    // Om filmen inte finns, avsluta funktionen
    if (index === -1) return;
    else {
      // Tar bort filmen från arrayen och sparar den borttagna filmen i deletedMovie
      const [deletedMovie] = movies.splice(index, 1);

      // Skriver tillbaka den uppdaterade listan till filen
      await fs.writeFile(MOVIES_FILE_PATH, JSON.stringify(movies, null, 2));

      // Returnerar den borttagna filmen
      return deletedMovie;
    }
  } catch (error) {
    // Loggar eventuella fel som uppstår vid borttagning eller filskrivning
    console.log(error);
  }
};

//<!---------------------------------------------------------------------------------------------------------------!>
const updateMovieRating = async (id: string, rating: number) => {
  const movies = await getMovies();

  const index = movies.findIndex((movie: any) => movie.id === id);

  // Kontrollera först om filmen finns
  if (index === -1) return;

  // Uppdatera rating
  movies[index].rating = rating;

  // 🔥 Spara tillbaka till JSON-filen
  await fs.writeFile( MOVIES_FILE_PATH, JSON.stringify(movies, null, 2));

  return movies[index];
};

// <!---------------------------------------------------------------------------------------------------------------!>
export {getMovies,addMovie,getMoviebByID,deleteMovieByID,updateMovieRating};
// READ <!---------------------------------------------------------------------------------------------------------------!>
// try{
//      console.log("Läsning lyckades");

//     fs.readFile(MOVIES_FILE_PATH, 'utf-8')
//     .then(json => JSON.parse(json))
//     .then((movies) => console.log(movies));

// } catch (error){
//      console.log("Fel vid läsning av JSON:", error);
// }
// <!----------------------------------------------------------------------------------------------------------------!>
// const newDataBase = {test: 'Testar'};
// const newDataBase:any = []
// fs.writeFile(MOVIES_FILE_PATH, JSON.stringify(newDataBase, null, 2))
//     .then(() => console.log('success'))
//     .catch(error => console.log(error));
//<!----------------------------------------------------------------------------------------------------------------!>

//  const newMovie = {
//     name: 'Jack sparrow',
//     director: 'Disney',
//     year: 2005,
//     id: crypto.randomUUID()
// }

// try{
//     fs.readFile(MOVIES_FILE_PATH, 'utf-8')
//     .then(rawMovies  => {
//         const movies = JSON.parse(rawMovies);
//         movies.push(newMovie);

//         fs.writeFile(MOVIES_FILE_PATH, JSON.stringify(movies, null, 2))
//             .then(() => console.log('Movie added successfully'))
//             .catch(error => console.log(error));
//     })
// } catch(error){
//      console.log("Fel vid skrivning av JSON:", error);
// }
//<!----------------------------------------------------------------------------------------------------------------!>
