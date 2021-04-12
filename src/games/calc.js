import getRandom from '../random.js';

const arrayOfMethods = [
  { name: '+', call: (x, y) => x + y },
  { name: '-', call: (x, y) => x - y },
  { name: '*', call: (x, y) => x * y },
];

export default function makeGameData() {
  return {
    title: 'What is the result of the expression?',
    makeTask: () => {
      const no = getRandom(0, 2);
      const x = getRandom(1, 10);
      const y = getRandom(1, 10);
      const method = arrayOfMethods[no];
      const result = method.call(x, y).toString();
      return {
        question: `${x} ${method.name} ${y}`,
        correctAnswer: result,
      };
    },
  };
}
