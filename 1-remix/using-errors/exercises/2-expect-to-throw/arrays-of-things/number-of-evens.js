// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns {number|null} The number of even numbers in the array or null if the array is empty or doesn't contain numbers.
 */
export const numberOfEvens = (numbers = []) => {
  if (!isArrayOfNumbers(numbers)) {
    return null;
  }

  if (numbers.length === 0) {
    return null;
  }

  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      count++;
    }
  }

  return count;
};
