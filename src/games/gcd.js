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
    title: 'Find the greatest common divisor of given numbers.',
    makeTask: () => {
      const x = getRandom(1, 30);
      const y = getRandom(1, 30);
      const result = getGcd(x, y).toString();
      return {
        question: `${x} ${y}`,
        correctAnswer: result,
      };
    },
  };
}
