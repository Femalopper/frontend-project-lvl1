#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { enterName, userName } from '../src/cli.js';

userName();

const isEvenOrOdd = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNumber}`);
    const enterAnswer = readlineSync.question('Your answer: ');
    if ((randomNumber % 2 === 0 && enterAnswer === 'yes') || (randomNumber % 2 !== 0 && enterAnswer === 'no')) console.log('Correct!');
    else {
      const loseStr = `'${enterAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${enterName}!`;
      const mirrorAnswer = `'${enterAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${enterName}!`;
      return enterAnswer === 'yes' ? loseStr : mirrorAnswer;
    }
  }
  return `Congratulations, ${enterName}!`;
};

console.log(isEvenOrOdd());
