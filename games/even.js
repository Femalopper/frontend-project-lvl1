import { calculation, rules } from '../src/index.js';

const isEvenOrOdd = () => {
  rules('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswer;

  const questionAnswer = () => {
    const exerciseQuestion = Math.floor(Math.random() * 101);
    if (exerciseQuestion % 2 === 0) correctAnswer = 'yes';
    else correctAnswer = 'no';
    return [exerciseQuestion, correctAnswer];
  };
  console.log(calculation(questionAnswer));
};

export default isEvenOrOdd;
