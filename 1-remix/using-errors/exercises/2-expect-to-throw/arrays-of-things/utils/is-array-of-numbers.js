/**
 *
 * @param {*} array
 * @returns {boolean}  True if the array contains only numbers, false otherwise.
 */

export const isArrayOfNumbers = (array = []) => {
   return array.every((element) => typeof element === 'number');
};
