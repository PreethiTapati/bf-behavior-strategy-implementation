// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns {number|null} The smallest number from the array or null if the array is empty or doesn't contain numbers.
 */
export const findSmallestNumber = (numbers = []) => {
  if (!isArrayOfNumbers(numbers)) {
    return null;
  }

  if (numbers.length === 0) {
    return null;
  }

  let smallestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallestNumber) {
      smallestNumber = numbers[i];
    }
  }

  return smallestNumber;
};
