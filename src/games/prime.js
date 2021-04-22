import { generateRandomInt } from '../helpers.js';
import { startGame } from '../engine.js';

function isPrime(number) {
  if (number < 2) return false;
  const startNumber = 2;
  const middle = number / 2;
  for (let i = startNumber; i < middle; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function generateRound() {
  const number = generateRandomInt(2, 100);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return {
    question: number.toString(),
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
