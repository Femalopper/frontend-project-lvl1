import { rules, calculation, congrats } from '../src/index.js';

const calc = () => {
  rules('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * 3);
    const firstRandomNumber = Math.floor(Math.random() * 101);
    const secondRandomNumber = Math.floor(Math.random() * 101);
    const exerciseQuestion = `${firstRandomNumber} ${operators[randomIndex]} ${secondRandomNumber}`;
    let correctAnswer = 0;
    if (operators[randomIndex] === '+') correctAnswer = firstRandomNumber + secondRandomNumber;
    if (operators[randomIndex] === '-') correctAnswer = firstRandomNumber - secondRandomNumber;
    if (operators[randomIndex] === '*') correctAnswer = firstRandomNumber * secondRandomNumber;
    const result = calculation(correctAnswer, exerciseQuestion);
    console.log(result);
    if (result !== 'Correct!') return;
  }
  congrats();
};

export default calc;
