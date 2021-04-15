import generateRandomInt from '../helpers.js';

const operations = [
  { name: '+', invoke: (x, y) => x + y },
  { name: '-', invoke: (x, y) => x - y },
  { name: '*', invoke: (x, y) => x * y },
];

function makeGameData() {
  return {
    title: 'What is the result of the expression?',
    getRound: () => {
      const operationIndex = generateRandomInt(0, 2);
      const x = generateRandomInt(1, 10);
      const y = generateRandomInt(1, 10);
      const method = operations[operationIndex];
      const result = method.invoke(x, y).toString();
      return {
        question: `${x} ${method.name} ${y}`,
        correctAnswer: result,
      };
    },
  };
}

export { operations, makeGameData };
