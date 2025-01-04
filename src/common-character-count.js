const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const processText = (str) => {
    const res = new Map();
    for (const char of str) {
      res.has(char) ? res.set(char, res.get(char) + 1) : res.set(char, 1);
    }
    return res;
  };
  let count = 0;
  s1 = processText(s1);
  s2 = processText(s2);

  for (const [key, value] of s1.entries()) {
    if (s2.has(key)) count += Math.min(value, s2.get(key));
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
