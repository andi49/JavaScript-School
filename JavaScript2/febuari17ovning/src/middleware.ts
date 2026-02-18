// middleware.ts
import type { Request, Response, NextFunction } from "express";
import fs from "fs/promises";
import { IP_FILE_PATH } from "./fileSystemOperation";

export const middleware = async (req: Request, res: Response, next: NextFunction) => {
    const ip = req.ip
    const method = req.method;
    const typeBrowser =  navigator.userAgent
    const timestamp = new Date().toISOString();

    const logEntry = { ip, method, timestamp, typeBrowser };

    try {
        // Läs filen, om den inte finns starta med tom array
        let logs: any[] = [];
        try {
            const data = await fs.readFile(IP_FILE_PATH, "utf-8");
            logs = JSON.parse(data);
        } catch {
            logs = [];
        }

        // Lägg till den nya loggen
        logs.push(logEntry);

        // Skriv tillbaka hela arrayen
        await fs.writeFile(IP_FILE_PATH, JSON.stringify(logs, null, 2));

    } catch (err) {
        console.error("Kunde inte spara loggen:", err);
    }

    next();
};
