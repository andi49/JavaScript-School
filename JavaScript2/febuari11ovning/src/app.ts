import express from 'express';
import { getAllSongs } from "./fileSystemOperation";




export const app = express();

app.use(express.json());

//<!---------------------------------------------------------------------------------------------------------------!>
// app.get('/', async (req, res) => {
//     try {
//         // Fetch songs from your JSON file
//         const songs = await getAllSongs();

//         const songsList = songs.map((song:any) => `<li> Name:${song.name} Artist: ${song.artist}</li>`).join('');

//         res.send(`
//             <!DOCTYPE html>
//             <html>
//             <head>
//                 <title>Min Express App</title>
//             </head>
//             <body>
//                 <h1>Hej från Express!</h1>
//                 <ul>
//                     ${songsList}
//                 </ul>
//                 <p>GET request mottagen.</p>
//             </body>
//             </html>`);
//     } catch (error) {
//         console.error('Error fetching songs:', error);
//         res.status(500).send('Failed to load songs');
//     }
// });
//<!---------------------------------------------------------------------------------------------------------------!>
app.get('/songs', async (req, res) => {
    console.log('Queries:', req.query);
    try {
        const songs = await getAllSongs();
        console.log('Get all songs', );
        res.json(songs);
       
    } catch (error) {
        console.error('Error fetching songs:', error);
        res.status(500).json({ error: 'Failed to get songs' });
    }
});
//<!---------------------------------------------------------------------------------------------------------------!>
