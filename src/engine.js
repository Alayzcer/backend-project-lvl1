import readlineSync from 'readline-sync';

export default function startGame(gameData) {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}`);
  if (gameData === null) {
    return;
  }
  console.log(gameData.getTask());
  let retryQuantity = 3;
  while (retryQuantity > 0) {
    const context = gameData.getContext();
    console.log(`Question: ${gameData.getQuestion(context)}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!gameData.checkAnswer(context, userAnswer)) {
      const correctAnswer = gameData.getAnswer(context);
      const msg = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
      console.log(msg);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
    retryQuantity -= 1;
  }
  console.log(`Congratulations, ${userName}!`);
}
