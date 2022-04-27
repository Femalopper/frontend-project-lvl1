import { calculation, congrats, rules } from '../src/index.js';

const isEvenOrOdd = () => {
  rules('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswer;

  for (let i = 0; i < 3; i += 1) {
    const exerciseQuestion = Math.floor(Math.random() * 101);
    if (exerciseQuestion % 2 === 0) correctAnswer = 'yes';
    else correctAnswer = 'no';
    const result = calculation(correctAnswer, exerciseQuestion);
    console.log(result);
    if (result !== 'Correct!') return;
  }
  congrats();
};

export default isEvenOrOdd;
