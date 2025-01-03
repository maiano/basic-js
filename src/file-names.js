const { NotImplementedError } = require("../extensions/index.js");

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const mapNames = new Map();
  for (const el of names) {
    if (mapNames.has(el)) {
      let count = mapNames.get(el);
      let newName = `${el}(${count})`;

      while (mapNames.has(newName)) {
        count++;
        newName = `${el}(${count})`;
      }
      mapNames.set(el, count + 1);
      mapNames.set(newName, 1);
    } else {
      mapNames.set(el, 1);
    }
  }
  return [...mapNames.keys()];
}

module.exports = {
  renameFiles,
};
