import getRandom from '../random.js';

function checkSimpleNumber(no) {
  for (let i = 2; i < no; i += 1) {
    if (no % i === 0) {
      return false;
    }
  }
  return true;
}

export default function makeGameData() {
  return {
    title: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    makeTask: () => {
      const no = getRandom(2, 100).toString();
      const rightAnswer = checkSimpleNumber(no) ? 'yes' : 'no';
      return {
        question: no,
        correctAnswer: rightAnswer,
      };
    },
  };
}
