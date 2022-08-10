'use strict';

var getSqur = function getSqur(x) {
  return Math.pow(x, 2);
};

console.log("\n Answer is : ", getSqur(4));

var words = ['apple', 'ball', 'cat', 'duck'];
// function upperConvert(word) {
//     return word.toUpperCase();
// }

// const arrowConvert = (word) => word.toUpperCase();


var wordsUpper = words.map(function (word) {
  return word.toUpperCase();
});

// const filterPredicate = (word) => word.includes('a');
// const filtered = words.filter(filterPredicate);
console.log(wordsUpper);

var getFirstName = function getFirstName(fullName) {
  return fullName.split(" ")[0];
};
console.log("First name  Aswin P Das is : ", getFirstName("Aswin P Das"));
