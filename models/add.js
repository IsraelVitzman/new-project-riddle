import { writeFile, readFile } from "node:fs/promises";


export async function AddRiddle(riddle) {
    try {
        const filePath = '../dataRiddles/riddles.txt'
        let listRiddle = []


        const data = await readFile(filePath, 'utf-8');
        if (data.length > 0) {
            listRiddle = JSON.parse(data);
        }


        listRiddle.push(riddle)

        await writeFile(filePath, JSON.stringify(listRiddle, null, 2), 'utf-8');
        console.log("Riddle saved successfully!");

    } catch (err) {
        console.error("Failed to write riddle:", err);
    }
}
AddRiddle({
    "id": "1",
    "name": "plos",
    "hint": "4+2",
    "question": "3+3?",
    "answer": "6"
})