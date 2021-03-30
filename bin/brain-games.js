#!/usr/bin/env node

import { getUserName, welcome } from "../src/cli.js";

welcome();
const userName = getUserName();
console.log(`Hello, ${userName}`);
