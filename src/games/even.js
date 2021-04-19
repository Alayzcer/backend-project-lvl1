import { generateRandomInt, isEven } from '../helpers.js';
import { startGame } from '../engine.js';

function generateRound() {
  const number = generateRandomInt(1, 100);
  return {
    question: number.toString(),
    correctAnswer: isEven(number) ? 'yes' : 'no',
  };
}

function makeGameData() {
  return {
    title: 'Answer "yes" if the number is even, otherwise answer "no".',
    getRound: generateRound,
  };
}

export default () => startGame(makeGameData());
