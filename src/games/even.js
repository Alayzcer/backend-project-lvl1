import getRandom from '../random.js';

const isEven = (x) => x % 2 === 0;

function makeGameData() {
  return {
    title: 'Answer "yes" if the number is even, otherwise answer "no".',
    makeRound: () => {
      const number = getRandom(1, 100);
      return {
        question: number.toString(),
        correctAnswer: isEven(number) ? 'yes' : 'no',
      };
    },
  };
}

export { isEven, makeGameData };
