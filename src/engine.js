import readlineSync from 'readline-sync';

export default function startGame(userName, gameData) {
  const { title, makeTask } = gameData;
  console.log(title);
  const tasksCount = 3;
  for (let i = 0; i < tasksCount; i += 1) {
    const { question, correctAnswer } = makeTask();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      const msg = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
      console.log(msg);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
