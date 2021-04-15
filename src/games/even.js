import generateRandomInt from '../helpers.js';

const isEven = (x) => x % 2 === 0;

function makeGameData() {
  return {
    title: 'Answer "yes" if the number is even, otherwise answer "no".',
    getRound: () => {
      const number = generateRandomInt(1, 100);
      return {
        question: number.toString(),
        correctAnswer: isEven(number) ? 'yes' : 'no',
      };
    },
  };
}

export { isEven, makeGameData };
