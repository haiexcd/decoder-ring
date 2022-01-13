// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    //create our polybius square collection
    const alphabet = {
      1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e' },
      2: { 1: 'f', 2: 'g', 3: 'h', 4: '(i/j)', 5: 'k' },
      3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p' },
      4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u' },
      5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z' },
    };

    input = input.toLowerCase().split('');                // setting input to lowercase and split into array format
    const spaces = input.filter(space => space != ' ');   // filtering array without spaces
    if (!encode) {                                        // then we decode
      let decode = "";                                    // creating variable decode to hold decode message
      if (spaces.length % 2 != 0) return false;           // a copy of our array without spaces to check if there are an odd number of numbers
      for (let i = 0; i < input.length; i += 2) {         // [column][row] format                                                      
        if (input[i] === " ") {                           // checking if theres a space in the input
          decode += " ";                                  // if there is add space to decode message
          i--;                                            // reset index a space since our value was a space
        }
        else {                                            // else.....
          decode += alphabet[input[i + 1]][input[i]];     // decode 
        }
      }
      return decode;                                      // return decode message
    }
    else {                                                // else..... 
      const encode = [];                                  // creating variable for encode message
      for (let letter of input) {                         // looping through input array for each letter we will find the key/value pair 
        if (letter === " ") {                             // checking for spaces within input array
          encode.push(" ");                               // if so push space to encode array
        }
        for (let r = 1; r < 6; r++) {                     // looping through each column
          for (let c = 1; c < 6; c++) {                   // looping through each row
            if (alphabet[r][c].includes(letter)) {        // if alphabet letter equals input letter
              encode.push(c);                             // push both values in encode array
              encode.push(r);
            }
          }
        }
      }
      return encode.join("");                             // use join method to concat encode array
    }
  }
  return {                                                // return polybius
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
