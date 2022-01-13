// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!input || !alphabet || alphabet.length != 26) return false;      // checking if input, alphabet, alphabet length are within parameters                                                                 
    for (let i = 0; i < alphabet.length; i++) {                          // looping through alphabet 
      for (let j = i + 1; j < alphabet.length; j++) {                    // looping again 
        if (alphabet[i] === alphabet[j]) {                               // checking for duplicates                           
          return false;                                                  // if so return false 
        }
      }
    }
    const actAlphabet = "abcdefghijklmnopqrstuvwxyz";                    // creating a correct alphabet variable
    const message = [];                                                  // placeholder for output message
    if (encode) {                                                        // checking if encode is true
      for (let i = 0; i < 26; i++) {                                     // if so encode and loop through
        message[actAlphabet[i]] = alphabet[i]                            // matching each letter via index from alphabet to actAlphabet
      }
    }
    else {                                                               // else...
      for (let i = 0; i < 26; i++) {                                     // decode and loop through
        message[alphabet[i]] = actAlphabet[i];                           // matching each letter via index from actAlphabet to alphabet
      }
    }
    const result = input.toLowerCase().split("").map(letter => {         // creating varible for output result, set to lowercase, split, and convert to array
      if (letter === " ") return " ";                                    // if there are any spaces return space
      return message[letter];                                            // return message[letter]
    })
    return result.join("");                                              // use join method to concat result array
  }
  return {                                                               // return substitution 
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
