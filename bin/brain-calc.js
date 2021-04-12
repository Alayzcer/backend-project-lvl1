#!/usr/bin/env node

import welcome from '../src/cli.js';
import playGame from '../src/engine.js';
import makeGameData from '../src/games/calc.js';

const userName = welcome();
const data = makeGameData();
playGame(userName, data);
