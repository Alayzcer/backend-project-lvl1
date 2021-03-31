function getRandom(from, to) {
  const no = Math.random() * (to - from) + from;
  return Math.round(no);
}

function getProgression() {
  const first = getRandom(1, 30);
  const step = getRandom(2, 10);
  const size = 10;
  const prog = [];
  prog.push(first);
  let last = first;
  for (let i = 1; i < size; i += 1) {
    last += step;
    prog.push(last);
  }
  return prog;
}

function makeQuestion(progression, hideIndex) {
  const swapItem = progression[hideIndex];
  const temp = progression.map((x) => (swapItem === x ? ".." : x));
  return temp.join(" ");
}

function progressionGetTask() {
  return "What number is missing in the progression?";
}

function progressionGetContext() {
  const progression = getProgression();
  const hideIndex = getRandom(2, progression.length - 1);
  const correctAnswer = progression[hideIndex];
  const textProg = makeQuestion(progression, hideIndex);
  return {
    question: textProg,
    answer: correctAnswer,
  };
}

function progressionGetQuestion(context) {
  return context.question;
}

function progressionCheckAnswer(context, userAnswer) {
  return context.answer === parseInt(userAnswer, 10);
}

function progressionGetAnswer(context) {
  return context.answer;
}

export default function makeGameData() {
  return {
    getTask: progressionGetTask,
    getContext: progressionGetContext,
    getQuestion: progressionGetQuestion,
    checkAnswer: progressionCheckAnswer,
    getAnswer: progressionGetAnswer,
  };
}
