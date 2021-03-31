function getRandom(from, to) {
  const no = Math.random() * (to - from) + from;
  return Math.round(no);
}

function evenGetTask() {
  return 'Answer "yes" if the number is even, otherwise answer "no".';
}

function evenGetContext() {
  const number = getRandom(1, 100);
  return {
    no: number,
    answer: number % 2 === 0 ? 'yes' : 'no',
  };
}

function evenGetQuestion(context) {
  return context.no;
}

function evenCheckAnswer(context, userAnswer) {
  return context.answer === userAnswer.toLowerCase();
}

function evenGetAnswer(context) {
  return context.answer;
}

export default function makeGameData() {
  return {
    getTask: evenGetTask,
    getContext: evenGetContext,
    getQuestion: evenGetQuestion,
    checkAnswer: evenCheckAnswer,
    getAnswer: evenGetAnswer,
  };
}
