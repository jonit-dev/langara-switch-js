/*#############################################################|
|                        LOOPS
*##############################################################*/
// Loops iterate through data
let teachers = ['Jacob','Kevin','Jordan'];
/* Loop types =========================================== */
/*
* For
* ForOF
* ForEach
* While
* DoWhile
* */

/* For =========================================== */
//iterate through the array above
for(let i = 0; i < teachers.length; i++) {
    console.log(teachers[i]);
}
//you can also use it to repeat procedures
console.log("Lets say hello world 10 times");
for(let i = 0; i <= 10; i++) {
    console.log("Hello World --> loop " + i);
}

/* For of =========================================== */
for(teacher of teachers) {
    console.log(teacher);
}

/* While loop =========================================== */
let i = 0;
while(i < teachers.length) {
    console.log(teachers[i]);
    i++;
}

/* ForEach =========================================== */

let numbers = [22,33,45,56,77];
numbers.reverse();

numbers.forEach((number) => {
    console.log(number);
});



