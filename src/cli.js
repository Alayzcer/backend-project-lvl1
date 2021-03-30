import readlineSync from "readline-sync";

function welcome() {
  console.log("Welcome to the Brain Games!");
}

function getUserName() {
  const userName = readlineSync.question("May I have your name?: ");
  return userName;
}

function askMe(text) {
  return readlineSync.question(text);
}
export { welcome, getUserName, askMe };
