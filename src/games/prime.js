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
    getTask: () =>
      'Answer "yes" if given number is prime. Otherwise answer "no".',
    getContext: () => {
      const no = getRandom(2, 100);
      const correctAnswer = checkSimpleNumber(no) ? 'yes' : 'no';
      return {
        question: no,
        answer: correctAnswer,
      };
    },
    getQuestion: (context) => context.question,
    checkAnswer: (context, userAnswer) =>
      context.answer === userAnswer.toLowerCase(),
    getAnswer: (context) => context.answer,
  };
}
