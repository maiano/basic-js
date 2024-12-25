const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();

  return [...str].reduce((prev, _curr, i) => {
    const num = parseInt(str.slice(0, i) + str.slice(i + 1), 10);
    if (num > prev) {
      prev = num;
    }
    return prev;
  }, 0);
}

module.exports = {
  deleteDigit,
};
