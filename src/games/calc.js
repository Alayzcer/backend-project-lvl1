import getRandom from '../random.js';

const operations = [
  { name: '+', invoke: (x, y) => x + y },
  { name: '-', invoke: (x, y) => x - y },
  { name: '*', invoke: (x, y) => x * y },
];

function makeGameData() {
  return {
    title: 'What is the result of the expression?',
    makeRound: () => {
      const operationIndex = getRandom(0, 2);
      const x = getRandom(1, 10);
      const y = getRandom(1, 10);
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
