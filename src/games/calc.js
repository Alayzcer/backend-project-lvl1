import getRandom from '../random.js';

const arrayOfMethods = [
  { name: '+', call: (x, y) => x + y },
  { name: '-', call: (x, y) => x - y },
  { name: '*', call: (x, y) => x * y },
];

export default function makeGameData() {
  return {
    getTask: () => 'What is the result of the expression?',
    getContext: () => {
      const no = getRandom(0, 2);
      const x = getRandom(1, 10);
      const y = getRandom(1, 10);
      const method = arrayOfMethods[no];
      const result = method.call(x, y);
      return {
        question: `${x} ${method.name} ${y}`,
        answer: result,
      };
    },
    getQuestion: (context) => context.question,
    checkAnswer: (context, userAnswer) => context.answer === parseInt(userAnswer, 10),
    getAnswer: (context) => context.answer,
  };
}
