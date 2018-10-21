/*#############################################################|
|                        OBJECTS
*##############################################################*/

// JavaScript objects are containers for named values called properties or methods.

/* Object literal (most used way) =========================================== */
const robot = {
    //Attributes
    name: 'asimo',
    color: 'white',
    version: 4.5,
    enemies: [],
    friends: [],
    characteristics: { //object inside an object
        likesHumans: true,
        likesTrump: false
    },

    //methods
    dance: function () {
        console.log(`${this.name} is dancing!`);
    },
    blinkEyes() {
        console.log(`${this.name} is blinking its eyes!`);
    },
    eat(target){
        console.log(`I'm trying to eat an ${target.name}, but... I'm a robot! I cannot eat it!`);
    },
    describe() {
        return {
            name: this.name,
            color: this.color,
            version: this.version
        }
    }

};

//Accessing attributes
console.log(robot.name);
console.log(robot.color);
console.log(`Does this robot likes trump? ${robot.characteristics.likesTrump}`);

console.log(robot.describe());

//calling his actions
robot.dance();
robot.blinkEyes();

/* Object Constructor =========================================== */
const fruit = new Object({
    color: 'red',
    name: 'Apple'
});
fruit.shape = 'round';

console.log(fruit);

robot.eat(fruit);