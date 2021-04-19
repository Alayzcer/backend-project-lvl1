import { generateRandomInt } from '../helpers.js';
import { startGame } from '../engine.js';

const operations = [
  { name: '+', invoke: (x, y) => x + y },
  { name: '-', invoke: (x, y) => x - y },
  { name: '*', invoke: (x, y) => x * y },
];

function generateRound() {
  const operationIndex = generateRandomInt(0, 2);
  const x = generateRandomInt(1, 10);
  const y = generateRandomInt(1, 10);
  const method = operations[operationIndex];
  const result = method.invoke(x, y).toString();
  return {
    question: `${x} ${method.name} ${y}`,
    correctAnswer: result,
  };
}

function makeGameData() {
  return {
    title: 'What is the result of the expression?',
    getRound: generateRound,
  };
}

export default () => startGame(makeGameData());
