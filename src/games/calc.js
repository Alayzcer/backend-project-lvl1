function getRandom(from, to) {
  const no = Math.random() * (to - from) + from;
  return Math.round(no);
}

function evenGetTask() {
  return 'What is the result of the expression?';
}

const arrayOfMethods = [
  { name: '+', call: (x, y) => x + y },
  { name: '-', call: (x, y) => x - y },
  { name: '*', call: (x, y) => x * y },
];

function evenGetContext() {
  const no = getRandom(0, 2);
  const x = getRandom(1, 10);
  const y = getRandom(1, 10);
  const item = arrayOfMethods[no];
  const result = item.call(x, y);
  return {
    question: `${x} ${item.name} ${y}`,
    answer: result,
  };
}

function evenGetQuestion(context) {
  return context.question;
}

function evenCheckAnswer(context, userAnswer) {
  return context.answer === parseInt(userAnswer, 10);
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
