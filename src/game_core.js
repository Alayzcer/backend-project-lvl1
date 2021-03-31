import { welcome, getUserName, askMe } from "./cli.js";

function writeRightAnswer(correctAnswer, userAnswer) {
  const msg = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  console.log(msg);
}

function playGame(userName, gameData) {
  console.log(gameData.getTask());
  let retryQuantity = 3;
  while (retryQuantity > 0) {
    const context = gameData.getContext();
    console.log(`Question: ${gameData.getQuestion(context)}`);
    const userAnswer = askMe("Your answer: ");
    if (!gameData.checkAnswer(context, userAnswer)) {
      writeRightAnswer(gameData.getAnswer(context), userAnswer);
      return false;
    }
    console.log("Correct!");
    retryQuantity -= 1;
  }
  return true;
}

export default function startGame(gameData) {
  welcome();
  const userName = getUserName();
  console.log(`Hello, ${userName}`);
  if (gameData === null) {
    return;
  }
  const youAreWin = playGame(userName, gameData);
  if (youAreWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
}
