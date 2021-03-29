#!/usr/bin/env node

import { getUserName } from '../src/cli';

console.log( 'Welcome to the Brain Games!' );
const userName = getUserName();
console.log( `Hello, ${userName}`);
