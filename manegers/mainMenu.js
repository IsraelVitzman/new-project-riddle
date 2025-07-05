import readlineSync from 'readline-sync';
import { ManagerGame } from './managerGame.js'
import { AddRiddle } from '../models/add.js'
import { readAllRiddles } from '../models/read.js'
import { NewRiddle } from '../newRiddle/newRiddle.js';

export async function showMainMenu() {
    while (true) {
        console.log(`
==========================
✨ Main Menu ✨
1. Play the game
2. Create a new riddle
3. Show all riddles
4. Update a riddle by ID
5. Delete a riddle by ID
==========================
    `);

        const choice = readlineSync.question('Choose an action (1-5): ');

        try {
            switch (choice) {
                case '1':
                    console.log('🎮 Starting the game...');
                    await ManagerGame()
                    break;

                case '2':
                    console.log('📝 Creating a new riddle...');
                    const id = readlineSync.question('Enter ID: ');
                    const name = readlineSync.question('Enter riddle name: ');
                    const hint = readlineSync.question('Enter hint: ');
                    const question = readlineSync.question('Enter the question: ');
                    const answer = readlineSync.question('Enter the answer: ');
                    const newRiddle = NewRiddle(id, name, hint, question, answer)
                    await AddRiddle(newRiddle)
                    break;

                case '3':
                    console.log('📜 Showing all riddles...');
                    const riddles = await readAllRiddles();
                    console.log("Riddles:", riddles);
                    break;

                case '4':
                    console.log('✏️ Updating riddle by ID...');
                    const riddleId = readlineSync.question('Enter riddle ID: ');
                    const newName = readlineSync.question('Enter new name: ');
                    await UpdateRiddle(riddleId, newName);
                    break;

                case '5':
                    console.log('🗑️ Deleting riddle by ID...');

                    break;

                default:
                    console.log('⚠️ Invalid choice. Please try again.');
                    break;
            }
        } catch (error) {
            console.error("Error in menu operation:", error);
        }
    }
}

showMainMenu();