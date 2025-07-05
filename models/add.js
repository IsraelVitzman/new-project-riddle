import { writeFile, readFile } from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function AddRiddle(riddle) {
    try {
        const filePath = path.join(__dirname, "..", "dataRiddles", "riddles.txt");
        let listRiddle = []


        const data = await readFile(filePath, 'utf-8');
        if (data.trim().length > 0) {
            listRiddle = JSON.parse(data);
        }


        listRiddle.push(riddle)

        await writeFile(filePath, JSON.stringify(listRiddle, null, 2), 'utf-8');
        console.log("Riddle saved successfully!");

    } catch (err) {
        console.error("Failed to write riddle:", err);
    }
}