// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function isInRange(valToCheck) {
    return (valToCheck - 97) * (valToCheck - 122) <= 0;
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    let output = [];
    let newCharCode = "";
    if (shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
    const lowercaseInput = input.toLowerCase();
    if (encode === true) {
      for (let i = 0; i < lowercaseInput.length; i++) {
        if (isInRange(lowercaseInput.charCodeAt(i)) === false) {
          newCharCode = lowercaseInput.charCodeAt(i);
        } else {
          newCharCode = lowercaseInput.charCodeAt(i) + shift;
          if (newCharCode > 122) {
            newCharCode = newCharCode - 122 + 96;
          }
          if (newCharCode < 97) {
            newCharCode = newCharCode - 96 + 122;
          }
        }
        output.push(String.fromCharCode(newCharCode));
      }
    } else {
      for (let i = 0; i < lowercaseInput.length; i++) {
        if (isInRange(lowercaseInput.charCodeAt(i)) === false) {
          newCharCode = lowercaseInput.charCodeAt(i);
        } else {
          newCharCode = lowercaseInput.charCodeAt(i) - shift;
          if (newCharCode > 122) {
            newCharCode = newCharCode - 122 + 96;
          }
          if (newCharCode < 97) {
            newCharCode = newCharCode - 96 + 122;
          }
        }
        output.push(String.fromCharCode(newCharCode));
      }
    }
    return output.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
