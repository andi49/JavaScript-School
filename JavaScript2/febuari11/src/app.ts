import { error } from 'console';
import express from 'express';
import fs from 'fs/promises';


const MOVIES_FILE_PATH = './public/movies.json';
export const app = express();
app.use(express.json());

// READ <!---------------------------------------------------------------------------------------------------------------!>
try{
     console.log("Läsning lyckades");

    fs.readFile(MOVIES_FILE_PATH, 'utf-8')
    .then(json => JSON.parse(json))
    .then((movies) => console.log(movies));

} catch (error){
     console.log("Fel vid läsning av JSON:", error);
}
// <!----------------------------------------------------------------------------------------------------------------!>

