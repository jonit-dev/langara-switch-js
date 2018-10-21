
/*#############################################################|
|                        VARIABLES
*##############################################################*/

//Variables are structures used to store information

//let vs var for initializing variables
let neighborhood = "Oakridge";
var oldVariable = "This is an old syntax (ES5) variable. It uses var";
// let name = prompt("What's your name?");
let name = "John";

//checking the type of a variable
console.log(`The type of the variable 'name' is ${typeof name}`);

//constants
const pi = 3.1416;

console.log(`PI(${pi}) is a constant. You cannot change its value!`);
// pi = "somethingelse";

//Variables naming rules:
/*
letters, numbers, underscores, dollar signs
begin with a letter
case sensitive
 */

/* Styles =========================================== */
//Camelcase
let thisIsACamelCaseVariable = "Prefer this one";
//underscore 
let this_is_underscore = "Often used in php";

/* String concatenation  =========================================== */
//We can also use variables to avoid repetition!
let answer = "Your name is " + name + " and you live in " + neighborhood;

//Displaying on the screen and on console
console.log(answer);
// alert(answer);

/* ES6 string concatenation (easier) =========================================== */
console.log(`Your name is ${name} and you live in ${neighborhood}`);

/* DATATYPES =========================================== */
//Variables can hold many different datatypes
/*
* Number
* String
* Array
* Object
* */

let number1 = 35; //int (number)
let number2 = "35";
let randomNumber = Math.floor(Math.random() * 100); //generate random number between 1 and 100

console.log(`Number1=${number1} - number2=${number2}`);
console.log(`Is number1 an integer? ${Number.isInteger(number1)}`);
console.log(`Is number2 an integer? ${Number.isInteger(number2)}`);
console.log(`And what about adding those together? ${number1+number2}`);
console.log(`Lets fix it? ${number1+Number.parseInt(number2)}`);
console.log(`Random number is: ${randomNumber}`);


/* Bonus =========================================== */

let myFunction = function() {
    console.log('A variable can hold even a function!');
};
myFunction();