import readlineSync from 'readline-sync';

const roundsCount = 3;

function playGame(userName, gameData) {
  const { title, getRound } = gameData;
  console.log(title);
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = getRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}

export { roundsCount, playGame };
