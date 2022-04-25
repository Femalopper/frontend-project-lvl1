import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = () => {
  const enterName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${enterName}!`);
};

export default userName;
