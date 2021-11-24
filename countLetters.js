// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual}  ===   ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual}  !== ${expected} `);
  }
};

// TEST CODE
/*assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);*/

const countLetters = function(word) {
  const result = {};
  const fixedWord = word.split(" ").join("");
  for (let letter of fixedWord) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;