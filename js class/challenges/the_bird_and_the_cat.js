/*
* Create two objects, a bird an a cat.
* Make those animals with the following attributes:
*- Bird: He has a blue color, is called 'twillio', know how to sing, and he can also peck the cat. He has an attribute called alive, set to true when he is alive.
*- Cat: It is named felix, know how to eat and sleep all day and he can eat the bird (50% of chance of success). When it happens, kill the bird!
* */

const bird = {
    name: "twillio",
    color: "blue",
    alive: true,
    sing() {
        console.log(`${this.name} is singing! Pewpewpewpewpewp`);
    },
    peck(target) {
        console.log(`${this.name} is pecking ${target.name}. WOW!!`);
    },
    die() {
        this.alive = false;
    }


};

const cat = {
    name: 'Felix',
    eatAndSleep() {
        console.log(`The lazy ${this.name} cat just sleep and eat all day! Give him a job!`);
    },
    eat(target) {
        let n = Math.floor(Math.random() * 100);
        if(n <= 50) {
            console.log(`${this.name} has eaten ${target.name}. Poor bird!`);
            target.alive = false;
        } else {
            console.log(`${this.name} tried to eat ${target.name}, but it fails!`);
        }
    }
}

bird.sing();
cat.eatAndSleep();
cat.eat(bird);
console.log(`Is the bird alive? ${bird.alive}`);




