import { generateRandomInt, isPrime } from '../helpers.js';
import { startGame } from '../engine.js';

function generateRound() {
  const number = generateRandomInt(2, 100).toString();
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return {
    question: number,
    correctAnswer: rightAnswer,
  };
}

function makeGameData() {
  return {
    title: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    getRound: generateRound,
  };
}

export default () => startGame(makeGameData());
