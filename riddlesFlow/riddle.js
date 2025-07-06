import { time, returnTime, addSecondsForQuestion } from '../time/time.js';
import { QuestionsManager } from '../questionsManager/QuestionsManager.js';

export function Riddle(riddle) {
    const startTime = time();
    QuestionsManager(riddle)
    const endAskTime = time();
    addSecondsForQuestion(returnTime(startTime, endAskTime));
}