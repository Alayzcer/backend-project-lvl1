import readlineSync from 'readline-sync';

function getUserName() {
  const userName = readlineSync.question('May I have your name?: ');
  return userName;
}

export { getUserName as default };
