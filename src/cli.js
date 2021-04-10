import startGame from './engine.js';
import calcGame from './games/calc.js';
import evenGame from './games/even.js';
import gcdGame from './games/gcd.js';
import primeGame from './games/prime.js';
import progressionGame from './games/progression.js';

export default function playGame() {
  return {
    welcome: () => startGame(null),
    calc: () => startGame(calcGame()),
    even: () => startGame(evenGame()),
    gcd: () => startGame(gcdGame()),
    prime: () => startGame(primeGame()),
    progression: () => startGame(progressionGame()),
  };
}
