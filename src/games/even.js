import getRandom from '../random.js';

export default function makeGameData() {
  return {
    getTask: () => 'Answer "yes" if the number is even, otherwise answer "no".',
    getContext: () => {
      const number = getRandom(1, 100);
      const isEven = (x) => x % 2 === 0;
      return {
        no: number,
        answer: isEven(number) ? 'yes' : 'no',
      };
    },
    getQuestion: (context) => context.no,
    checkAnswer: (context, userAnswer) => context.answer === userAnswer.toLowerCase(),
    getAnswer: (context) => context.answer,
  };
}
