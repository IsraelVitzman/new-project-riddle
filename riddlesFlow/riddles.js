import { time, addTimeForAllRidders, returnTime } from '../time/time.js';
import { Riddle } from './riddle.js';

export async function Riddles(riddles) {
    const startTime = time();

    for (const riddle of riddles) {
        await Riddle(riddle);
    }

    const endTime = time();
    addTimeForAllRidders(returnTime(startTime, endTime));
}