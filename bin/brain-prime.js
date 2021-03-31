#!/usr/bin/env node

import startGame from "../src/game_core.js";
import makeGameData from "../src/games/prime.js";

const data = makeGameData();
startGame(data);
