var nameVar = "Aswin"
var nameVar = "Aswin P Das"
console.log('nameVar:', nameVar)

let nameLet = "Arun"
nameLet = "Arun Das"
console.log('nameLet:', nameLet)

const nameConst = "Roji"
// nameConst = 'Roji Roy' cant assign a new value to const variable (read-only)
console.log('nameConst:', nameConst)

// block scoping 
var fullName = "Aswin Das";
if (fullName) {
    var firstName = fullName.split(" ")[0]; // let and const will not allow to print the value out side the scope.
    console.log("First name: ", firstName);
}
console.log("First name out side the if scope:", firstName);


