
// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  //checks if a given value is between 97 and 122 which are the ASCII codes for a-z
  function isInRange(valToCheck) {
    return (valToCheck - 97) * (valToCheck - 122) <= 0;
  }

  function caesar(input, shift, encode = true) {
    //initialize output array variable
    let output = [];
    //initialize variable to store a characters ASCII code
    let newCharCode = "";
    //return false if shift input is invalid
    if (shift === 0 || shift > 25 || shift < -25) {
      return false;
    }
    //create a lowercase version of input
    const lowercaseInput = input.toLowerCase();
    //encode block
    if (encode === true) {
      //checks if each character in the input is a letter
      //if it is not letter it pushes that character to the output
      //if it is a letter it shifts that letter by the given shift amount and pushes that character to the output
      for (let i = 0; i < lowercaseInput.length; i++) {
        if (isInRange(lowercaseInput.charCodeAt(i)) === false) {
          newCharCode = lowercaseInput.charCodeAt(i);
        } else {
          newCharCode = lowercaseInput.charCodeAt(i) + shift;
          //check if the shifted character falls out of range and shifts it back to the expected output
          if (newCharCode > 122) {
            newCharCode = newCharCode - 122 + 96;
          }
          if (newCharCode < 97) {
            newCharCode = newCharCode - 96 + 122;
          }
        }
        output.push(String.fromCharCode(newCharCode));
      }
      //decode block
    } else {
      //checks if each character in the input is a letter
      //if it is not letter it pushes that character to the output
      //if it is a letter it shifts that letter by the given shift amount and pushes that character to the output
      for (let i = 0; i < lowercaseInput.length; i++) {
        if (isInRange(lowercaseInput.charCodeAt(i)) === false) {
          newCharCode = lowercaseInput.charCodeAt(i);
        } else {
          //the message is decoded by subtracting the shift amount instead of adding it
          newCharCode = lowercaseInput.charCodeAt(i) - shift;
          //check if the shifted character falls out of range and shifts it back to the expected output
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
    //returns the output array using .join to turn it into one string
    return output.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };