import express from 'express';
import { getAllIp } from './fileSystemOperation';
import { middleware } from './middleware';
import fs from "fs/promises";
import { IP_FILE_PATH } from "./fileSystemOperation";
import cors from "cors";


export const app = express();
app.use(express.json());
app.use(cors()); 
app.use(middleware);

app.get('/ip', async (req, res) => {
    console.log('Queries:', req.query);
    try {
        const songs = await getAllIp();
        console.log('Get all ip');
        res.json(songs);
       
    } catch (error) {
        console.error('Error fetching ip:', error);
        res.status(500).json({ error: 'Failed to get ip'});
    }
});

app.post('/ip', async (req, res) => {
    try {
        const newIp = req.body; // { ip: "127.0.0.1", method: "GET", timestamp: "..." }
        const ips = await getAllIp(); // läs befintliga logs
        ips.push(newIp);
        await fs.writeFile(IP_FILE_PATH, JSON.stringify(ips, null, 2));
        res.status(201).json(newIp);
    } catch (err) {
        console.error("Error saving IP:", err);
        res.status(500).json({ error: "Failed to save IP" });
    }
});
