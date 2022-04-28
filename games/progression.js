import { rules, calculation } from '../src/index.js';

const findMissingNumber = () => {
  rules('What number is missing in the progression?');
  const questionAnswer = () => {
    const firstRandomNumber = Math.floor(Math.random() * 11);
    const getInterval = (min, max) => Math.random() * (max - min) + min;
    const step = Math.floor(Math.random() * 10) + 1;
    const sequence = [firstRandomNumber];
    const sequenceLength = getInterval(5, 10);
    for (let i = 1; i < sequenceLength; i += 1) {
      sequence[i] = sequence[i - 1] + step;
    }
    const missingNumber = Math.floor(Math.random() * sequence.length);
    const correctAnswer = sequence[missingNumber];
    sequence[missingNumber] = '..';
    const exerciseQuestion = sequence.join(' ');
    return [exerciseQuestion, correctAnswer];
  };
  console.log(calculation(questionAnswer));
};

export default findMissingNumber;
