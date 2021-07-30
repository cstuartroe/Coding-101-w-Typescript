console.log("2. Expressions and Syntactic Abstraction");

const my_name: string = "Conor";

console.log(my_name.length);
console.log("Conor".length);
console.log((my_name + " Stuart-Roe").length)

// Expressions can be:
// variable name
// string
// number
// boolean
// another expression + "." + identifier
// expression + expression
// expression - expression
// ...and many more

// DRY - Don't Repeat Yourself

const my_title: string = "Mr." // Change to "Dr."

console.log("My name is " + my_name);
console.log("My title is " + my_title);
console.log("So you can call me " + my_title + " " + my_name);

// operator precedence

console.log("The length is " + my_name.length);
console.log(("The length is " + my_name).length);
