// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //create an array that contains the original alphabet
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
    //checks to see if new alphabet exists and contains exactly 26 unique characters
    if (!alphabet || alphabet.length != 26) return false;
    const unique = Array.from(new Set(alphabet));
    if (unique.length != 26) {
    return false;
    }
    //initialize output array variable
    let output = [];
    //encode block
    if (encode) {
      for (char in input) {
        //pushes spaces to the output array
        if (input[char] === " ") {
          output.push(" ");
        }
        //checks each input character and pushes the matching position of new alphabet to the output array
        for (let i = 0; i < alphabet.length; i++) {
          if (input[char] === ogAlphabet[i]) {
            output.push(alphabet[i]);
          }
        }
      }
      //decode block
    } else {
      for (char in input) {
        //pushes spaces to the output array
        if (input[char] === " ") {
          output.push(" ");
        }
        //checks each input character and pushes the matching position of original alphabet to the output array
        for (let i = 0; i < alphabet.length; i++) {
          if (input[char] === alphabet[i]) {
            output.push(ogAlphabet[i]);
          }
        }
      }
    }
    //returns the output array using .join to turn it into one string
    return output.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
