import calculation from '../index.js';

const calc = () => {
  const rules = 'What is the result of the expression?';

  const questionAnswer = () => {
    const operators = ['+', '-', '*'];
    const randomIndex = Math.floor(Math.random() * 3);
    const firstRandomNumber = Math.floor(Math.random() * 10);
    const secondRandomNumber = Math.floor(Math.random() * 10);
    const exerciseQuestion = `${firstRandomNumber} ${operators[randomIndex]} ${secondRandomNumber}`;
    let correctAnswer = 0;
    if (operators[randomIndex] === '+') correctAnswer = firstRandomNumber + secondRandomNumber;
    if (operators[randomIndex] === '-') correctAnswer = firstRandomNumber - secondRandomNumber;
    if (operators[randomIndex] === '*') correctAnswer = firstRandomNumber * secondRandomNumber;
    return [exerciseQuestion, correctAnswer];
  };

  console.log(calculation(rules, questionAnswer));
};

export default calc;
