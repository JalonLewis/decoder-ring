// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let ogAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26) return false;
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i+1; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          return false;
        }
      }
    }
    let output = [];
    if (encode) {
      for (char in input) {
        if (input[char] === " ") {
          output.push(" ");
        }
        for (let i = 0; i < alphabet.length; i++) {
          if (input[char] === ogAlphabet[i]) {
            output.push(alphabet[i]);
          }
        }
      }
    } else {
      for (char in input) {
        if (input[char] === " ") {
          output.push(" ");
        }
        for (let i = 0; i < alphabet.length; i++) {
          if (input[char] === alphabet[i]) {
            output.push(ogAlphabet[i]);
          }
        }
      }
    }
    return output.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
