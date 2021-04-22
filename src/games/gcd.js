import generateRandomInt from '../helpers.js';
import { startGame } from '../engine.js';

function getGcd(x, y) {
  let preLast = x;
  let last = y;
  do {
    const newDivisor = preLast % last;
    preLast = last;
    last = newDivisor;
  } while (last !== 0);
  return preLast;
}

function generateRound() {
  const x = generateRandomInt(1, 30);
  const y = generateRandomInt(1, 30);
  const result = getGcd(x, y).toString();
  return {
    question: `${x} ${y}`,
    correctAnswer: result,
  };
}

function makeGameData() {
  return {
    title: 'Find the greatest common divisor of given numbers.',
    getRound: generateRound,
  };
}

export default () => startGame(makeGameData());
