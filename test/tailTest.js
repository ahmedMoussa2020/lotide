const assert = require('chai').assert;
const tail = require('../tail.js');
//const assertEqual = require('../assertEqual');
// const assertEqual = require('../assertEqual');
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
tail(words.length, 3); // original array should still have 3 elements!
