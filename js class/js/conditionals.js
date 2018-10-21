/*#############################################################|
|                        CONDITIONALS
*##############################################################*/

let age = 19;
let likesBeer = false; //boolean
let likesWine = true;
let canDrive = false;
let isDrunk = true;
let preferredCars = ['Ford','BMW', 'Porshe','Ferrari'];
// let preferredCar = preferredCars[1];
let preferredCar = "helloworld";

// Check all comparison operators here: https://www.w3schools.com/js/js_comparisons.asp

/* If, else =========================================== */

// greater than, else
if (age >= 19) {
    console.log('You can drink alcohol');
} else {
    console.log("You arent allowed to drink alcohol, kid!");
}

// ==
if (age == 21) {
    console.log('Your age is equal 21.');
} else if (age == 20) {
    console.log('Your age is 20');
} else {
    console.log('Your age is something else...');
}

// && , || (and and or)
 if (age >= 19 && isDrunk) {
    console.log('Even being at the legal age, you cannot drive because you are drunk');
}

if((age >= 19 && !isDrunk) && (likesBeer || likesWine)) {
    console.log('You are allowed to drink. I see that you like beer and wine!');
}

/* Switch statement =========================================== */
switch(preferredCar) {
    case 'Ford':
        console.log('I see you like ford cars!');
        break;
    case 'BMW':
        console.log('Fancy car');
        break;
    default: //default is optional
        console.log('I didnt find your preferred car!');
        break;
}



