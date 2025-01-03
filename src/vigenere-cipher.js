const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  _processText(text, key, isEncrypting) {
    if (!text || !key) throw new Error("Incorrect arguments!");

    text = text.toUpperCase();
    key = key.toUpperCase();

    const result = [];
    let index = 0;

    for (const char of text) {
      if (/[A-Z]/.test(char)) {
        const textCharCode = char.charCodeAt(0);
        const keyCharCode = key[index % key.length].charCodeAt(0);

        const shift = isEncrypting ? 1 : -1;
        const processedCharCode =
          ((textCharCode - 65 + shift * (keyCharCode - 65) + 26) % 26) + 65;

        result.push(String.fromCharCode(processedCharCode));
        index++;
      } else {
        result.push(char);
      }
    }

    return this.direct ? result.join("") : result.reverse().join("");
  }

  encrypt(text, key) {
    return this._processText(text, key, true);
  }

  decrypt(text, key) {
    return this._processText(text, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
