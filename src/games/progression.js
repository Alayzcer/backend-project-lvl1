import getRandom from '../random.js';

const progressionSize = 10;

function getProgression(first, step, size) {
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
  const temp = progression.map((x) => (swapItem === x ? '..' : x));
  return temp.join(' ');
}

function makeGameData() {
  return {
    title: 'What number is missing in the progression?',
    makeRound: () => {
      const first = getRandom(1, 30);
      const step = getRandom(2, 10);
      const progression = getProgression(first, step, progressionSize);
      const hideIndex = getRandom(2, progression.length - 1);
      const rightAnswer = progression[hideIndex].toString();
      const taskQuestion = makeQuestion(progression, hideIndex);
      return {
        question: taskQuestion,
        correctAnswer: rightAnswer,
      };
    },
  };
}

export { progressionSize, getProgression, makeGameData };
