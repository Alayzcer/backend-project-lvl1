import getRandom from '../random.js';

function isPrime(no) {
  for (let i = 2; i < no; i += 1) {
    if (no % i === 0) {
      return false;
    }
  }
  return true;
}

function makeGameData() {
  return {
    title: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    makeRound: () => {
      const number = getRandom(2, 100).toString();
      const rightAnswer = isPrime(number) ? 'yes' : 'no';
      return {
        question: number,
        correctAnswer: rightAnswer,
      };
    },
  };
}

export { isPrime, makeGameData };
