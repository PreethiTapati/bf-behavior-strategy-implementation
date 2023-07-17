// you can use this to check the argument
import { isArrayOfNumbers } from './is-array-of-numbers.js';

/**
 *
 * @param {*} numbers
 * @returns {number|null} The greatest number from the array or null if the array is empty or doesn't contain numbers.
 */
export const findGreatestNumber = (numbers = []) => {
  if (!isArrayOfNumbers(numbers)) {
    return null;
  }

  if (numbers.length === 0) {
    return null;
  }

  let greatestNumber = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > greatestNumber) {
      greatestNumber = numbers[i];
    }
  }

  return greatestNumber;
};
