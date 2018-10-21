/*#############################################################|
|                        FUNCTIONS
*##############################################################*/

/*
*  A function is a JavaScript procedure—a set of statements that performs a task or calculates a value.
* */

function sayHelloWorld() {
    console.log('Hello World!');
}
sayHelloWorld();

//ES6 syntax
let saySomething = (word) => {
    console.log('Lets say: ' + word);
};
saySomething('Its freezing here in Canada, uh?');


//DRY example

//consider a list of alumni grades on exams
let grades = [7,8,9,10,2,4,5];
//and also consider that for passing the term, you'll need at least an 7
let passingMark = 7;

//we will have to split the alumni who passed and who didnt into different arrays
let passed = [];
let failed = [];

//lets verify which alumni passed the term?

for(grade of grades) {
   passCheck();
   failCheck();

}

function passCheck() {
    if(grade >= passingMark) {
        passed.push(grade);
        console.log(`The alumni with a grade of ${grade} passed the term`);
    }
}

function failCheck() {
    if(grade < passingMark) {
        failed.push(grade);
        console.log(`The alumni with a grade of ${grade} failed the term`);
    }
}












