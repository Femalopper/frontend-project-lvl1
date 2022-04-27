import { rules, calculation } from '../src/index.js';

const findGreatestCommonDivisior = () => {
  rules('Find the greatest common divisor of given numbers.');
  const questionAnswer = () => {
    const firstRandomNumber = Math.floor(Math.random() * 101);
    const secondRandomNumber = Math.floor(Math.random() * 101);
    const exerciseQuestion = `${firstRandomNumber} ${secondRandomNumber}`;
    let maxRandomNumber = 0;
    if (firstRandomNumber < secondRandomNumber) maxRandomNumber = secondRandomNumber;
    else maxRandomNumber = firstRandomNumber;
    let correctAnswer = 0;
    for (let j = 1; j <= maxRandomNumber / 2; j += 1) {
      if (firstRandomNumber % j === 0 && secondRandomNumber % j === 0) correctAnswer = j;
    }
    return [exerciseQuestion, correctAnswer];
  };
  console.log(calculation(questionAnswer));
};

export default findGreatestCommonDivisior;
