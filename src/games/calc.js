import generateRandomInt from '../helpers.js';
import { startGame } from '../engine.js';

const operations = [
  { name: '+', invoke: (x, y) => x + y },
  { name: '-', invoke: (x, y) => x - y },
  { name: '*', invoke: (x, y) => x * y },
];

function generateRandomMethod() {
  const index = generateRandomInt(0, operations.length - 1);
  return operations[index];
}

function generateRound() {
  const x = generateRandomInt(1, 10);
  const y = generateRandomInt(1, 10);
  const method = generateRandomMethod();
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
