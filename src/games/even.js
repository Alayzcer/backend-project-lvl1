import getRandom from '../random.js';

export default function makeGameData() {
  return {
    title: 'Answer "yes" if the number is even, otherwise answer "no".',
    makeTask: () => {
      const number = getRandom(1, 100);
      const isEven = (x) => x % 2 === 0;
      return {
        question: number.toString(),
        correctAnswer: isEven(number) ? 'yes' : 'no',
      };
    },
  };
}
