import generateRandomInt from '../helpers.js';
import { startGame } from '../engine.js';

const progressionSize = 10;

function getProgression(first, step, size) {
  let last = first - step;
  const prog = [];
  for (let i = 0; i < size; i += 1) {
    last += step;
    prog.push(last);
  }
  return prog;
}

function makeQuestion(progression, hideIndex) {
  const swapItem = progression[hideIndex];
  const temp = progression.map((x) => (swapItem === x ? '..' : x));
  return temp.join(' ');
}

function generateRound() {
  const first = generateRandomInt(1, 30);
  const step = generateRandomInt(2, 10);
  const progression = getProgression(first, step, progressionSize);
  const hideIndex = generateRandomInt(2, progression.length - 1);
  const rightAnswer = progression[hideIndex].toString();
  const taskQuestion = makeQuestion(progression, hideIndex);
  return {
    question: taskQuestion,
    correctAnswer: rightAnswer,
  };
}

function makeGameData() {
  return {
    title: 'What number is missing in the progression?',
    getRound: generateRound,
  };
}

export default () => startGame(makeGameData());
