import { rules, calculation } from '../src/index.js';

const isPrimeNumber = () => {
  rules('Answer "yes" if given number is prime. Otherwise answer "no".');
  const questionAnswer = () => {
    const exerciseQuestion = Math.floor(Math.random() * 101);
    let counter = 0;
    let correctAnswer;
    for (let i = 1; i <= exerciseQuestion; i += 1) {
      if (exerciseQuestion > 1 && exerciseQuestion % i === 0) counter += 1;
    }
    if (counter === 2) correctAnswer = 'yes';
    else correctAnswer = 'no';
    return [exerciseQuestion, correctAnswer];
  };
  console.log(calculation(questionAnswer));
};

export default isPrimeNumber;
