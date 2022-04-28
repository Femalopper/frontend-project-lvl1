import readlineSync from 'readline-sync';
import { enterName, userName } from './cli.js';

const calculation = (rules, questionAnswer) => {
  userName();

  console.log(rules);

  for (let i = 0; i < 3; i += 1) {
    const [exerciseQuestion, correctAnswer] = questionAnswer();
    console.log(`Question: ${exerciseQuestion}`);
    let userAnswer = readlineSync.question('Your answer: ');
    const loseStr = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${enterName}!`;
    if (typeof correctAnswer === 'number') {
      userAnswer = Number(userAnswer);
    }
    if (userAnswer === correctAnswer) console.log('Correct!');
    else return loseStr;
  }
  return `Congratulations, ${enterName}!`;
};

export default calculation;
