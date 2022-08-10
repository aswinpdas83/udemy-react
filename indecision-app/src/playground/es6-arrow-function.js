const getSqur = (x) => x ** 2

console.log("\n Answer is : ", getSqur(4))


const words = ['apple', 'ball', 'cat', 'duck'];
// function upperConvert(word) {
//     return word.toUpperCase();
// }

// const arrowConvert = (word) => word.toUpperCase();


const wordsUpper = words.map(word => word.toUpperCase());

// const filterPredicate = (word) => word.includes('a');
// const filtered = words.filter(filterPredicate);
console.log(wordsUpper);

const getFirstName = (fullName) => fullName.split(" ")[0];
console.log("First name  Aswin P Das is : ", getFirstName("Aswin P Das"))