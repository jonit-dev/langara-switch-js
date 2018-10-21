/*#############################################################|
|                        ARRAYS
*##############################################################*/

//Its basically a "contianer" to store multiple variables

let colors = ['red', 'blue', 'green'];

//How do we access those values?
console.log(colors);
console.log(colors[0]); //first value is always going to be zero

//Alternative ways to create arrays
let avoid = new Array('almost', 'nobody', 'uses', 'this', 'style');
console.log(avoid);

/* INSERTING NEW VALUES =========================================== */

//Inserting by index
colors[3] = "Black"; //sometimes useful... but prefer to use push
console.log('Adding new value to array...');
console.log(colors);

//the same can be accomplished with a method called push
//Prefer to use this way!
colors.push('Yellow');
console.log(colors);

//Array of numbers
let numbers = [5, 77, 6, 43];

console.log("Summing array numbers");
console.log(numbers[0] + numbers[3]);

//Pushing a string inside an array of numbers
numbers.push("intruder");
console.log(numbers);
//now lets use pop to remove it from the end
console.log('Removing last element...');
numbers.pop();

//getting the length of the array
console.log(`The number array has a length of ${numbers.length} elements`);

//what about sorting the array?
console.log("Sorting array values");
console.log(numbers.sort()); //it follows unicode code
console.log(numbers.sort(function (a, b) {
    return a - b
}));

//reverting array order
console.log(numbers.reverse());


