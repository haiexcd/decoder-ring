// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift > 25 || shift < -25) return false;            // checking for shift is within parameters
    if (!encode) shift = -shift;                                      // checking whether to encode or decode
    input = input.toLowerCase();                                      // convert input to lowercase
    const message = [];                                               // placehoder for output message
    const letters = "abcdefghijklmnopqrstuvwxyz";                     // creating a letters variable
    const alphabet = [...letters, ...letters, ...letters];            // creating a alphabet variable to hold edge cases
    for (inputLetter of input) {                                      // looping through input variable
      const index = letters.indexOf(inputLetter);                     // creating index varible to hold index of inputLetter
      if (!letters.includes(inputLetter)) {                           // checking if inputLeter includes letter
        message.push(inputLetter);                                    // if not push immediately to output message array
      }
      else {                                                          // else....
        message.push(alphabet[index + 26 + shift]);                   // push letter after accounting for index + 26(edge case) + shift 
      }
    }
    return message.join("");                                          // use join method to concat message array
  }
  return {                                                            //return ceasar function
    caesar,
  };
})();




module.exports = { caesar: caesarModule.caesar };
