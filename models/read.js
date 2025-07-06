import { readFile } from "node:fs/promises";

export async function readAllRiddles() {
    const filePath = '../dataRiddles/riddles.txt'

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

