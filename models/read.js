import { readFile } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function readAllRiddles() {
    const filePath = path.join(__dirname, "..", "dataRiddles", "riddles.txt");

    try {
        const data = await readFile(filePath, "utf-8");
        if (data.length === 0) {
            return [];
        }
        return JSON.parse(data);

    } catch (err) {
        console.log("invalid error");
        return [];


    }
}