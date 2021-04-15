import generateRandomInt from '../helpers.js';

const isEven = (x) => x % 2 === 0;

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

export { isEven, generateRound, makeGameData };
