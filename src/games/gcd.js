import getRandom from '../random.js';

function getGcd(x, y) {
  let preLast = x;
  let last = y;
  do {
    const newDivisor = preLast % last;
    preLast = last;
    last = newDivisor;
  } while (last !== 0);
  return preLast;
}

export default function makeGameData() {
  return {
    getTask: () => 'Find the greatest common divisor of given numbers.',
    getContext: () => {
      const x = getRandom(1, 30);
      const y = getRandom(1, 30);
      const result = getGcd(x, y);
      return {
        question: `${x} ${y}`,
        answer: result,
      };
    },
    getQuestion: (context) => context.question,
    checkAnswer: (context, userAnswer) => {
      return context.answer === parseInt(userAnswer, 10);
    },
    getAnswer: (context) => context.answer,
  };
}
