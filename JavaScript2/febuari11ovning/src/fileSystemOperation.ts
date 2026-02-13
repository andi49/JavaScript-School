import fs from "fs/promises";
const SONGS_FILE_PATH = "./public/songs.json";
//<!---------------------------------------------------------------------------------------------------------------!>
 const getAllSongs = async () => {

    const jsonSongs = await fs.readFile(SONGS_FILE_PATH, "utf-8")

    const songs = await JSON.parse(jsonSongs)

    return songs
}
//<!---------------------------------------------------------------------------------------------------------------!>
const getSongsByYear = async (year:number) => {
     const songs = await getAllSongs()
     
    const index = songs.findIndex((song:any) => song.year === year )

      // Om filmen inte hittas returneras inget (undefined)
    if (index === -1) return;
     // Annars returneras filmen som hittades
     else return songs[index];
};

export{getAllSongs,getSongsByYear}