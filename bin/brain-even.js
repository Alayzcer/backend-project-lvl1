#!/usr/bin/env node

import { welcome, getUserName, askMe } from "../src/cli.js";

function getRandom(from, to) {
  const no = Math.random() * (to - from) + from;
  return Math.round(no);
}

function writeRightAnswer(correctAnswer, userAnswer) {
  const msg = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;
  console.log(msg);
}

function playGame(userName) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let retryQuantity = 3;
  while (retryQuantity > 0) {
    const numOfRiddle = getRandom(1, 100);
    const correctAnswer = numOfRiddle % 2 === 0 ? "yes" : "no";
    console.log(`Question: ${numOfRiddle}`);
    const userAnswer = askMe("Your answer: ").toLowerCase();
    if (correctAnswer !== userAnswer) {
      writeRightAnswer(correctAnswer, userAnswer);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log("Correct!");
    retryQuantity -= 1;
  }
  console.log(`Congratulations, ${userName}!`);
}

welcome();
const userName = getUserName();
console.log(`Hello, ${userName}`);
playGame(userName);
