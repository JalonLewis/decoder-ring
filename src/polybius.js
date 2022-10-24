// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  //object containing the corresponding number pair for each letter input
  const encoder = {
    a: "11",
    b: "21",
    c: "32",
    d: "41",
    e: "51",
    f: "12",
    g: "22",
    h: "32",
    i: "42",
    j: "42",
    k: "52",
    l: "13",
    m: "23",
    n: "33",
    o: "43",
    p: "53",
    q: "14",
    r: "24",
    s: "34",
    t: "44",
    u: "54",
    v: "15",
    w: "25",
    x: "35",
    y: "45",
    z: "55",
  };

  //object containing the corresponding letter for each number pair input
  const decoder = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "(i/j)",
    53: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  function polybius(input, encode = true) {
    //checks if cihper should use the encoder or decoder object
    const cipher = encode ? encoder : decoder;
    //initialize final result array
    let output = [];
    //formats the input array to a new array that maintains spaces
    //stores pairs of numbers into each index for decoding
    // stores each letter in an index in lowercase for for encoding
    const formattedDecodeInput = [];
    const formattedEncodeInput = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        formattedDecodeInput.push(" ");
        formattedEncodeInput.push(" ");
      } else if (!encode) {
        formattedDecodeInput.push(input.slice(i, i + 2));
        i++;
      } else {
        formattedEncodeInput.push(input[i].toLowerCase());
      }
    }
    //encode block
    if (encode) {
      for (let i = 0; i < formattedEncodeInput.length; i++) {
        //pushes spaces to the output array
        if (formattedEncodeInput[i] === " ") {
          output.push(" ");
        } else {
          //pushes the matching numbers to the output for the matching letters in the input
          const cipherKeys = Object.keys(cipher);
          const cipherValues = Object.values(cipher);
          for (letter in cipherKeys) {
            if (cipherKeys[letter] === formattedEncodeInput[i]) {
              output.push(cipherValues[letter]);
            }
          }
        }
      }
    } else {
      //encode block

      //checks to see if the input contains an even amount of numbers
      const inputWithoutSpaces = input.split(" ").join("");
      if (inputWithoutSpaces.length % 2 != 0) return false;
      for (let i = 0; i < formattedDecodeInput.length; i++) {
        //pushes spaces to the output array
        if (formattedDecodeInput[i] === " ") {
          output.push(" ");
        } else {
          //pushes the matching letters to the output for the matching numbers in the input
          const cipherKeys = Object.keys(cipher);
          const cipherValues = Object.values(cipher);
          for (index in cipherKeys) {
            if (cipherKeys[index] === formattedDecodeInput[i]) {
              output.push(cipherValues[index]);
            }
          }
        }
      }
    }
    //returns the output array using .join to turn it into one string
    return output.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
