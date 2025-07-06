import { time, addTimeForAllRidders, returnTime } from '../time/time.js';
import { Riddle } from './riddle.js';

export function Riddles(riddles) {
    const startTime = time();

    for (const riddle of riddles) {
        Riddle(riddle);
    }

    const endTime = time();
    addTimeForAllRidders(returnTime(startTime, endTime));
}