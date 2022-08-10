"use strict";

var nameVar = "Aswin";
var nameVar = "Aswin P Das";
console.log('nameVar:', nameVar);

var nameLet = "Arun";
nameLet = "Arun Das";
console.log('nameLet:', nameLet);

var nameConst = "Roji";
// nameConst = 'Roji Roy' cant assign a new value to const variable (read-only)
console.log('nameConst:', nameConst);

// block scoping 
var fullName = "Aswin Das";
if (fullName) {
    var firstName = fullName.split(" ")[0]; // let and const will not allow to print the value out side the scope.
    console.log("First name: ", firstName);
}
console.log("First name out side the if scope:", firstName);

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
