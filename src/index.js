import readlineSync from 'readline-sync';
import { enterName, userName } from './cli.js';

export const rules = (question) => {
  userName();
  console.log(question);
};

export const calculation = (correctAnswer, exerciseQuestion) => {
  console.log(`Question: ${exerciseQuestion}`);
  let userAnswer = readlineSync.question('Your answer: ');
  const loseStr = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${enterName}!`;
  if (typeof correctAnswer === 'number') {
    userAnswer = Number(userAnswer);
  }
  if (userAnswer === correctAnswer) return 'Correct!';
  return loseStr;
};

export const congrats = () => {
  console.log(`Congratulations, ${enterName}!`);
};
