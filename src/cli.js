import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const enterName = readlineSync.question('May I have your name? ');

export const userName = () => {
  console.log(`Hello, ${enterName}!`);
};
