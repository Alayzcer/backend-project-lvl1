function getRandom(from, to) {
  const no = Math.random() * (to - from) + from;
  return Math.round(no);
}

function checkSimpleNumber(no) {
  for (let i = 2; i < no; i += 1) {
    if (no % i !== 0) {
      return false;
    }
  }
  return true;
}

function primeGetTask() {
  return 'Answer "yes" if given number is prime. Otherwise answer "no".';
}

function primeGetContext() {
  const no = getRandom(2, 100);
  const correctAnswer = checkSimpleNumber(no) ? 'yes' : 'no';
  return {
    question: no,
    answer: correctAnswer,
  };
}

function primeGetQuestion(context) {
  return context.question;
}

function primeCheckAnswer(context, userAnswer) {
  return context.answer === userAnswer.toLowerCase();
}

function primeGetAnswer(context) {
  return context.answer;
}

export default function makeGameData() {
  return {
    getTask: primeGetTask,
    getContext: primeGetContext,
    getQuestion: primeGetQuestion,
    checkAnswer: primeCheckAnswer,
    getAnswer: primeGetAnswer,
  };
}
