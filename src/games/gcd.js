function getRandom(from, to) {
  const no = Math.random() * (to - from) + from;
  return Math.round(no);
}

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

function gcdGetTask() {
  return 'Find the greatest common divisor of given numbers.';
}

function gcdGetContext() {
  const x = getRandom(1, 30);
  const y = getRandom(1, 30);
  const result = getGcd(x, y);
  return {
    question: `${x} ${y}`,
    answer: result,
  };
}

function gcdGetQuestion(context) {
  return context.question;
}

function gcdCheckAnswer(context, userAnswer) {
  return context.answer === parseInt(userAnswer, 10);
}

function gcdGetAnswer(context) {
  return context.answer;
}

export default function makeGameData() {
  return {
    getTask: gcdGetTask,
    getContext: gcdGetContext,
    getQuestion: gcdGetQuestion,
    checkAnswer: gcdCheckAnswer,
    getAnswer: gcdGetAnswer,
  };
}
