import calculation from '../index.js';

const isEvenOrOdd = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  let correctAnswer;

  const questionAnswer = () => {
    const exerciseQuestion = Math.floor(Math.random() * 101);
    if (exerciseQuestion % 2 === 0) correctAnswer = 'yes';
    else correctAnswer = 'no';
    return [exerciseQuestion, correctAnswer];
  };

  console.log(calculation(rules, questionAnswer));
};

export default isEvenOrOdd;
