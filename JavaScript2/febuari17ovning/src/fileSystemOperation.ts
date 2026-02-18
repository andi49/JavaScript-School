import fs from "fs/promises";
export const IP_FILE_PATH = "./public/ip.json";
//<!---------------------------------------------------------------------------------------------------------------!>
 export const getAllIp = async () => {

    const jsonIP = await fs.readFile(IP_FILE_PATH, "utf-8")

    const ip = await JSON.parse(jsonIP)

    return ip
}
//<!---------------------------------------------------------------------------------------------------------------!>