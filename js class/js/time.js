/*#############################################################|
|                        TIMING FUNCTIONS
*##############################################################*/


const customer = {
    name: "John snow",
    address: 'W 939 58th Oakridge, Vancouver, BC',
    orderPizza(pizzaDelivery) {
        console.log(`${this.name} is ordering a pizza....`);
        console.log('Lets wait some time while he calls ' + pizzaDelivery.name + '...');
        setTimeout(() => {

            pizzaDelivery.receiveOrder(this, 'Pepperoni', 1);

        }, 3000)


    },
    code() {
        console.log('With pizza and coke, I can code in peace.');
    }
};


const pizzaDelivery = {
    name: "Domino's pizza",

    receiveOrder(customer, pizzaName, qty) {
        console.log(`${this.name} received a new order from ${customer.name}`);

        console.log("Let's start to prepare it!");

        this.createPizza(customer);


    },
    createPizza(customer) {
        //prepare it on three steps
        let step = 0;
        let instructions = [
            '1) For sauce: Combine all sauce ingredients with 1/2 cup water in a medium bowl; set aside for flavors to develop while making crust. Freeze remaining paste',
            '2) For crusts: Combine 2 cups of flour with the dry yeast, sugar and salt. Add the water and oil and mix until well blended (about 1 minute). Gradually add enough remaining flour slowly, until a soft, sticky dough ball is formed.',
            '3) Knead for about 4 minutes, on a floured surface, until dough is smooth and elastic. Add more flour, if needed. (If using RapidRise(R) Yeast, let dough rest, covered, for 10 minutes.)',
            '4) Divide dough in half. Pat each half (with floured hands) into a 12-inch greased pizza pan OR roll dough to fit pans.',
            '5) For pizzas: Preheat oven to 425 degrees F. Top crusts with sauce, pepperoni and cheese.',
            '6) Bake for 18 to 20 minutes until crusts are browned and cheese is bubbly. For best results, rotate pizza pans between top and bottom oven racks halfway through baking.'
        ];
        let pizzaPrepareInterval = setInterval(() => {
            if (step < instructions.length) {
                console.log(instructions[step]);
                console.log('...');
                step++;
            } else {
                clearInterval(pizzaPrepareInterval);
                console.log('Pizza is done, lets deliver it to the customer!');
                this.deliveryPizza(customer);
            }
        }, 3000)
    },
    deliveryPizza(customer) {
        console.log(`The pizza is being delivered to ${customer.name}, at ${customer.address}`);

    }
};

customer.orderPizza(pizzaDelivery);

