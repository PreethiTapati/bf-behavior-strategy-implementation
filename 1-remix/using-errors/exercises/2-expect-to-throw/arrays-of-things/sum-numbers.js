// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns {number|null} The sum of numbers in the array or null if the array is empty or doesn't contain numbers.
 */
export const sumNumbers = (numbers = []) => {
  if (!isArrayOfNumbers(numbers)) {
    return null;
  }

  if (numbers.length === 0) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};
