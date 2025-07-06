import readlineSync from 'readline-sync';

import { Player } from '../players/Player.js';
import { getSecondsForQuestion, getTimeForAllRidders } from '../time/time.js';
import { readAllRiddles } from '../models/read.js';
import { Riddles } from '../riddlesFlow/riddles.js';

export function ManagerGame() {
    console.log("Welcome to riddle Game");
    const namePlayer = readlineSync.question("What is your name: ");

    try {
        const riddles = readAllRiddles();

        if (riddles.length === 0) {
            console.log("No riddles found!");
            return;
        }

        Riddles(riddles);

        const allTime = getTimeForAllRidders();
        const averageTime = getSecondsForQuestion();

        console.log(`allTime: ${allTime}`);
        console.log(`average: ${averageTime}`);

        const player = new Player(namePlayer, averageTime, allTime);
        player.add();

    } catch (error) {
        console.error("Error running game:", error);
    }
}