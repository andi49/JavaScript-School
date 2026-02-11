const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3013;

// Middleware (VERY IMPORTANT)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// File path
const dataPath = path.join(__dirname, "data.json");

// Create JSON file if missing
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify([]));
}

// SAVE DATA
app.post("/save", (req, res) => {

    const newData = req.body;

    const fileData = fs.readFileSync(dataPath);
    const jsonData = JSON.parse(fileData);

    jsonData.push(newData);

    fs.writeFileSync(dataPath, JSON.stringify(jsonData, null, 2));

   
});

// GET DATA
app.get("/data", (req, res) => {
    const fileData = fs.readFileSync(dataPath);
    res.json(JSON.parse(fileData));
});

app.listen(PORT, ()=>{
    console.log('Listening on port ', PORT)
})